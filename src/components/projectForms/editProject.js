import React from 'react';
import queryString from 'querystring';
import {withRouter} from 'react-router-dom';
import ProjectForm from '../../containers/projectForm/projectForm';

const EditProject = (props) =>{

    const values = queryString.parse(props.location.search.slice(1));
    const title = values.projectTitle;
    
    async function fetchEdit  (project) {
        uploadImg(project.img,project.title);
        const imgUrl = await getImgPath(project.img.name.toString());
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
                    imgUrl : imgUrl
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

    async function getImgPath(imgName){
        fetch(`http://localhost:8000/getImg?filePath=${imgName}`,{
            method : 'GET',
        }).then((res) =>{
            return res
        }).catch((err) =>{
            console.log(err);
        })
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
        <ProjectForm title={title} submitHandler={fetchEdit} />
    );
}

export default withRouter(EditProject);