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
                img : "",
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
        if(this.props.title){
         fetch(`http://localhost:8000/loadProject?projectTitle=${this.props.title}`,{
             method : 'GET',
             headers : {
                 'Accept': 'application/json',
                 'Content-Type': 'application/json'
             },
         }).then((res)=>{
             return res.json();
         }).then((project)=>{
             this.setState({project : project});
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

    onChangeImgUrl = (file) =>{
        this.setState({
            project : {
                ...this.state.project,
                img : file
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
                    <input type="file" accept="image/x-png,image/gif,image/jpeg" 
                        name="img" id="img"
                        onChange={(event)=>{
                            this.onChangeImgUrl(event.target.files[0]);
                        }}>
                    </input>
                    <label htmlFor="img">upload an img</label>
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