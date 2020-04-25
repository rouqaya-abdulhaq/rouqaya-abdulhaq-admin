import React from 'react';
import Card from '../../UI/card/card';

import './projectsPage.css';

const projectsPage = (props) =>{

    const editHandler = () =>{
        console.log('edit project');
    }

    const deleteHandler = () =>{
        console.log('delete project');
    }

    const projects = props.serverData ? props.serverData.map((projectData)=>{
        return <Card title={projectData.title} info={projectData.info}
        url={projectData.url} githubUrl={projectData.githubUrl}
        editHandler={editHandler}
        deleteHandler={deleteHandler} 
        key={projectData.title}/>
    }) : "no projects to display";
    
    return(
        <main className="projectsPage">
            {projects}
        </main>
    );
}

export default projectsPage;