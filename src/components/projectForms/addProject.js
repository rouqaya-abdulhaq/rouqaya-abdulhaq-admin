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
        // uploadImg(project.img)
    }

    // const uploadImg = (img) =>{
    //     const fromData = new FormData();
    //     fromData.append('file',img);
    //     fetch("http://localhost:8000/uploadImg",{
    //         method : 'POST',
    //         headers : {
    //             'content-type': 'multipart/form-data'
    //         },
    //         body : fromData
    //     }).then((res) =>{
    //         console.log(res);
    //     })
    // }

    return(
        <ProjectForm submitHandler={fetchSubmit}/> 
    );
}

export default addProject;