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
                github : "",
                imgUrl : "",
                disableUrl : false
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

    proxyUrl = "https://aqueous-coast-32163.herokuapp.com/";

    loadProject = () =>{
        if(this.props.id){
         fetch(this.proxyUrl + `https://rouqaya-api.herokuapp.com/loadProject?projectId=${this.props.id}`,{
             method : 'GET',
             headers : {
                 'Accept': 'application/json',
                 'Content-Type': 'application/json'
             },
         }).then((res)=>{
             return res.json();
         }).then((res)=>{
             if(res.success){
                 const project = {...res.project, imgUrl : res.project.img_url, disableUrl: res.project.disable_url}
                this.setState({project : project});
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

    onChangeGithub = (value) =>{
        this.setState({
            project : {
                ...this.state.project,
                github : value
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

    onChangeDisableUrl = () =>{
        this.setState({
            project : {
                ...this.state.project,
                disableUrl : !this.state.project.disableUrl
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
                    <input placeholder="github" onChange={(event)=>this.onChangeGithub(event.target.value)}
                        value={this.state.project.github || ""}>
                    </input>
                    <input placeholder="img url" onChange={(event)=>{this.onChangeImgUrl(event.target.value);}}
                        value = {this.state.project.imgUrl || ""}>
                    </input>
                    <textarea placeholder="info" onChange={(event)=>this.onChangeInfo(event.target.value)}
                        value={this.state.project.info || ""}>
                    </textarea>
                    <label>Disable Url</label>
                    <input type="checkbox" onChange={this.onChangeDisableUrl}/>
                    <button type="button" onClick={this.onSubmit}>submit</button>
                </form>
            </main>
        );
    }
}

export default withRouter(AddProject);