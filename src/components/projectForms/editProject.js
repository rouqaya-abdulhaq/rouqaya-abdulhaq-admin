import React from 'react';
import queryString from 'querystring';
import {withRouter} from 'react-router-dom';
import ProjectForm from '../../containers/projectForm/projectForm';

const EditProject = (props) =>{

    const values = queryString.parse(props.location.search.slice(1));
    const title = values.projectTitle;
    
    const fetchEdit = (project) =>{
        fetch(`http://localhost:8000/editProject?projectTitle=${title}`,{
            method : 'PUT',
            headers : {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({
                updatedProject : {
                    title : project.title,
                    info : project.info,
                    url : project.url,
                    imgUrl : project.imgUrl
                }
            })
        }).then((res)=>{
            return res.json();
        }).then((project)=>{
            console.log(project);
            return project;
        }).catch((err)=>{
            console.log(err)
        })
    }

    return(
        <ProjectForm title={title} submitHandler={fetchEdit} />
    );
}

export default withRouter(EditProject);