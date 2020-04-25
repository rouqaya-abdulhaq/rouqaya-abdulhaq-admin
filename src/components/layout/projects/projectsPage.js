import React from 'react';
import Card from '../../UI/card/card';

import './projectsPage.css';

const projectsPage = (props) =>{

    const projects = props.serverData ? props.serverData.map((projectData)=>{
        return <Card title={projectData.title} info={projectData.info}
        url={projectData.url} githubUrl={projectData.githubUrl} key={projectData.title}/>
    }) : "no projects to display";
    
    return(
        <main className="projectsPage">
            {projects}
        </main>
    );
}

export default projectsPage;