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
            })
        }).then((res)=>{
            return res.json();
        }).then((project)=>{
            console.log(project);
        }).catch((err)=>{
            console.log(err)
        })
        uploadImg(project.img);
    }

    const uploadImg = (img) =>{
        const formData = new FormData();
        formData.append('img',img);
        fetch("http://localhost:8000/uploadImg",{
            method : 'POST',
            body : formData
        }).then((res) =>{
            console.log(res);
        })
    }

    return(
        <ProjectForm submitHandler={fetchSubmit}/> 
    );
}

export default addProject;