import React from 'react';
import ProjectForm from '../../containers/projectForm/projectForm';

const addProject = () =>{

    const fetchSubmit = (project) =>{
        fetch("http://localhost:8000/addProject",{
            method : 'POST',
            headers : {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({
                title : project.title,
                info : project.info,
                url : project.url,
                imgUrl : project.imgUrl
            })
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