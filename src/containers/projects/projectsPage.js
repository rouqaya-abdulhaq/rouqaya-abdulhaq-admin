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

    editHandler = (projectId) =>{
        this.props.history.push({
           pathname :  '/editProject',
           search : `?projectId=${projectId}`,});
    }

    updateState = (oldStateName , newState) =>{
        this.setState({[oldStateName] : newState})
    }

    proxyUrl = "https://aqueous-coast-32163.herokuapp.com/";

    deleteHandler = (id) =>{
        fetch(this.proxyUrl + 'https://rouqaya-api.herokuapp.com/removeProject',{
            method : 'DELETE',
            headers : {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({
                id : id
            })
            }).then((res)=>{
                return res.json();
            }).then((res)=>{
                if (res.success){
                    this.props.deleteProjectFromState(id);
                }
            }).catch((err)=>{
                console.log(err);
            });
    }

    
    
    render(){
        const projects = this.props.projects ? this.props.projects.map((projectData)=>{
            return <Card title={projectData.title} info={projectData.info}
            url={projectData.url} githubUrl={projectData.github} imgPath={projectData.img_url}
            editHandler={()=>this.editHandler(projectData.id)}
            deleteHandler={()=>this.deleteHandler(projectData.id)}
            key={projectData.id}/>
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
        projects : state.projects.projects
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        deleteProjectFromState : (id) => dispatch(deleteProjectFromState(id)),
        loadProjects : (loadCount) => dispatch(loadProjects(loadCount))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(projectsPage));