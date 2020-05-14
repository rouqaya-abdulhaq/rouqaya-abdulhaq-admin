import React from 'react';
import ProjectForm from '../../containers/projects/projectForm/projectForm';

const addProject = () =>{

    const fetchSubmit = (project) =>{
        const formData = new FormData();
        formData.append('img',project.img);
        formData.append('title',project.title);
        formData.append('info',project.info);
        formData.append('url',project.url);
        fetch("http://localhost:8000/addProject",{
            method : 'POST',
            headers : {
                'Accept': 'application/json',
            },
            body : formData
        }).then((res)=>{
            return res.json();
        }).then((project)=>{
            console.log(project);
        }).catch((err)=>{
            console.log(err)
        })
    }

    return(
        <ProjectForm submitHandler={fetchSubmit}/> 
    );
}

export default addProject;