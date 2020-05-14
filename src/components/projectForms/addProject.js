import React from 'react';
import ProjectForm from '../../containers/projects/projectForm/projectForm';

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
        uploadImg(project.img,project.title);
    }

    const uploadImg = (img,title) =>{
        const formData = new FormData();
        formData.append('img',img);
        fetch(`http://localhost:8000/uploadImg?title=${title}`,{
            method : 'POST',
            headers : {
                'Accept': 'application/json',
            },
            body : formData
        }).then((res) =>{
           console.log(res);
        }).catch((err)=>{
            console.log(err);
        })
    }

    return(
        <ProjectForm submitHandler={fetchSubmit}/> 
    );
}

export default addProject;