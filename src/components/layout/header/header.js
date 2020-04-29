import React from 'react';
import NavList from '../../UI/navList/navList';
import './header.css';

const header = (props) =>{

    const blogsLinks = [{value : "add blog",path : "/addBlog"},
                        {value : "view blogs",path : "/blogs"},];

    const projectsLinks = [{value : "add project",path : "/addProject"},
                            {value : "view projects", path : "/projects"},];

    return(
        <header>
            <NavList value="blogs" links={blogsLinks}/>
            <NavList value="projects" links={projectsLinks}/>
        </header>
    );
}

export default header;