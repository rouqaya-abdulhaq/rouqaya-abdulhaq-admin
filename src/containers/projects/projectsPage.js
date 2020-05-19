import React from 'react';
import {connect} from 'react-redux';
import {deleteProjectFromState,loadProjects} from '../../actions/projects';
import Card from '../../components/UI/card/card';
import { withRouter } from 'react-router-dom';

import './projectsPage.css';

class projectsPage extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            loadCount : 0
        }
    }

    componentDidMount(){
        this.props.loadProjects(this.state.loadCount);
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
                //hard code id for now only
                this.props.deleteProjectFromState(1);
            }).catch((err)=>{
                console.log(err);
            });
    }

    
    
    render(){
        const projects = this.props.projects ? this.props.projects.map((projectData,index)=>{
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

const mapStateToProps = (state) =>{
    return {
        projects : state.projects
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        deleteProjectFromState : (id) => dispatch(deleteProjectFromState(id)),
        loadProjects : (loadCount) => dispatch(loadProjects(loadCount))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(projectsPage));