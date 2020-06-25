import React from 'react';
import { withRouter } from 'react-router-dom';
import './projectForm.css';

class AddProject extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            project :{
                title : "",
                info : "",
                url : "",
                imgUrl : "",
            }
        }
        this.baseState = {...this.state.project};
    }

    componentDidMount(){
        this.loadProject();
    }

    shouldComponentUpdate(nextProps,nextState){
        if(nextState === this.state){
            return false;
        }else{
            return true;
        }
    }

    loadProject = () =>{
        if(this.props.id){
         fetch(`http://localhost:8000/loadProject?projectId=${this.props.id}`,{
             method : 'GET',
             headers : {
                 'Accept': 'application/json',
                 'Content-Type': 'application/json'
             },
         }).then((res)=>{
             return res.json();
         }).then((res)=>{
             if(res.success){
                this.setState({project : res.project});
             }
         }).catch((err)=>{
             console.log(err);
         });
        } 
     }

    onChangeTitle = (value) =>{
        this.setState({
            project : {
                ...this.state.project,
                title : value
            }
        });
    }

    onChangeInfo = (value) =>{
        this.setState({
            project : {
                ...this.state.project,
                info : value
            }
        });
    }

    onChangeUrl = (value) =>{
        this.setState({
            project : {
                ...this.state.project,
                url : value
            }
        });
    }

    onChangeImgUrl = (url) =>{
        this.setState({
            project : {
                ...this.state.project,
                imgUrl : url
            }
        });
    }
    
    onSubmit = () =>{
        this.props.submitHandler(this.state.project);
        this.setState({project : this.baseState});
        this.props.history.push('/projects');
    }

    render(){
        return(
            <main>
                <form>
                    <input placeholder="title" onChange={(event)=>this.onChangeTitle(event.target.value)}
                        value={this.state.project.title || ""}>
                    </input>
                    <input placeholder="url" onChange={(event)=>this.onChangeUrl(event.target.value)}
                        value={this.state.project.url || ""}>
                    </input>
                    <input placeholder="img url" onChange={(event)=>{this.onChangeImgUrl(event.target.value);}}
                        value = {this.state.project.imgUrl || ""}>
                    </input>
                    <textarea placeholder="info" onChange={(event)=>this.onChangeInfo(event.target.value)}
                        value={this.state.project.info || ""}>
                    </textarea>
                    <button type="button" onClick={this.onSubmit}>submit</button>
                </form>
            </main>
        );
    }
}

export default withRouter(AddProject);