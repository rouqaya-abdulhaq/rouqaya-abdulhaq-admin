import React from 'react';
import NavList from '../../UI/navList/navList';

const header = (props) =>{

    const blogsLinks = ["add blog","remove blog","edit project"];

    const projectsLinks = ["add project","remove project","edit project"];
    
    return(
        <header>
            <NavList value="blogs" links={blogsLinks}/>
            <NavList value="projects" links={projectsLinks}/>
        </header>
    );
}

export default header;