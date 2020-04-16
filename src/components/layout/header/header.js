import React from 'react';
import NavList from '../../UI/navList/navList';
import './header.css';

const header = (props) =>{

    const blogsLinks = [{value : "add blog",path : "/addBlog"},
                        {value : "remove blog",path : "/"},
                        {value : "edit project",path:"/"}];

    const projectsLinks = [{value : "add project",path : "/addProject"},
                            {value : "remove project", path : "/"},
                            {value : "edit project", path : "/"}];

    return(
        <header>
            <NavList value="blogs" links={blogsLinks}/>
            <NavList value="projects" links={projectsLinks}/>
        </header>
    );
}

export default header;