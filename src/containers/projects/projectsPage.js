import React from 'react';
import Card from '../../components/UI/card/card';
import { withRouter } from 'react-router-dom';

import './projectsPage.css';

class projectsPage extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            projects : [],
            loadCount : 0
        }
    }

    componentDidMount(){
        this.loadProjects();
    }

    loadProjects = () =>{
        fetch(`http://localhost:8000/loadProjects?loadCount=${this.state.loadCount}`,{
            method : 'GET',
            headers : {
                'Accept' : 'application/json',
            }
        }).then((res)=>{
            return res.json();
        }).then((projectsData)=>{
            this.setState({projects : projectsData});
            console.log(this.state.projects);
        }).catch((err)=>{
            console.log(err)
        })
    }

    editHandler = (projectTitle) =>{
        this.props.history.push({
           pathname :  '/editProject',
           search : `?projectTitle=${projectTitle}`,});
    }

    updateState = (oldStateName , newState) =>{
        this.setState({[oldStateName] : newState})
    }

    deleteHandler = (index) =>{
        fetch('http://localhost:8000/removeProject',{
            method : 'DELETE',
            headers : {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({
                index : index
            })
            }).then((res)=>{
                return res.json();
            }).then((res)=>{
                this.setState({projects : res});
            }).catch((err)=>{
                console.log(err);
            });
    }

    
    
    render(){

        const projects = this.state.projects ? this.state.projects.map((projectData,index)=>{
            return <Card title={projectData.title} info={projectData.info}
            url={projectData.url} githubUrl={projectData.githubUrl} imgPath={projectData.imgUrl}
            editHandler={()=>this.editHandler(projectData.title)}
            deleteHandler={this.deleteHandler}
            index = {index} 
            key={projectData.title}/>
        }) : "no projects to display";

        return(
            <main className="projectsPage">
                {projects}
            </main>
        );
    }
}

export default withRouter(projectsPage);