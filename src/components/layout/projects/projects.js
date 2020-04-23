import React from 'react';
import ServerLoad from '../../../containers/HOC/serverLoad/serverLoad';
import ProjectsPage from './projectsPage';

const projects = (props) =>{
    return(
    <ServerLoad url={'http://localhost:8000/loadProjects?loadCount=0'}>
        <ProjectsPage/>
    </ServerLoad>
    );
}

export default projects;