import React from 'react';
import queryString from 'querystring';
import {withRouter} from 'react-router-dom';
import ProjectForm from '../../containers/projects/projectForm/projectForm';

const EditProject = (props) =>{
    
    const values = queryString.parse(props.location.search.slice(1));
    const title = values.projectTitle;

    async function fetchEdit  (project) {
        const formData = new FormData();
        formData.append('img',project.img);
        formData.append('title',project.title);
        formData.append('info',project.info);
        formData.append('url',project.url);
        fetch(`http://localhost:8000/editProject?projectTitle=${title}`,{
            method : 'PUT',
            headers : {
                'Accept': 'application/json',
            },
            body : formData
        }).then((res)=>{
            return res.json();
        }).then((projects)=>{
            console.log(projects);
        }).catch((err)=>{
            console.log(err)
        })
    }

    return(
        <ProjectForm title={title} submitHandler={fetchEdit} />
    );
}

export default withRouter(EditProject);