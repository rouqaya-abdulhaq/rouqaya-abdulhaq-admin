import React from 'react';
import queryString from 'querystring';
import {withRouter} from 'react-router-dom';
import ProjectForm from '../../containers/projectForm/projectForm';

const EditProject = (props) =>{
    
    const values = queryString.parse(props.location.search.slice(1));
    const title = values.projectTitle;
    console.log(title);
    async function fetchEdit  (project) {
        uploadImg(project.img,project.title);

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
                    imgUrl : 'C:\\Users\\acer\\Desktop\\projects\\rouqaya-server\\' + project.img.name
                }
            })
        }).then((res)=>{
            return res.json();
        }).then((projects)=>{
            // console.log(projects);
            // props.loaction.state.updatedState("projects",projects);
        }).catch((err)=>{
            console.log(err)
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