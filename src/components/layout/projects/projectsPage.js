import React from 'react';
import Card from '../../UI/card/card';
import { withRouter } from 'react-router-dom';

import './projectsPage.css';

const projectsPage = (props) =>{

    const editHandler = (projectTitle) =>{
        props.history.push(`/editProject?projectTitle=${projectTitle}`);
    }

    const deleteHandler = (index) =>{
        fetch('http://localhost:8000/removeProject',{
            method : 'DELETE',
            headers : {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({
                index : index
            })
            }).then((res)=>{
                return res.json();
            }).then((res)=>{
                props.updateState(res);
            }).catch((err)=>{
                console.log(err);
            });
    }

    const projects = props.serverData ? props.serverData.map((projectData,index)=>{
        return <Card title={projectData.title} info={projectData.info}
        url={projectData.url} githubUrl={projectData.githubUrl} imgPath={projectData.imgUrl}
        editHandler={()=>editHandler(projectData.title)}
        deleteHandler={deleteHandler}
        index = {index} 
        key={projectData.title}/>
    }) : "no projects to display";
    
    return(
        <main className="projectsPage">
            {projects}
        </main>
    );
}

export default withRouter(projectsPage);