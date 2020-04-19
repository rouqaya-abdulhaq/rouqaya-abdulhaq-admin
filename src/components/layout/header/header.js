import React from 'react';
import NavList from '../../UI/navList/navList';
import './header.css';

const header = (props) =>{

    const blogsLinks = [{value : "add blog",path : "/addBlog"},
                        {value : "remove blog",path : "/blogs"},
                        {value : "edit blog",path:"/blogs"}];

    const projectsLinks = [{value : "add project",path : "/addProject"},
                            {value : "remove project", path : "/projects"},
                            {value : "edit project", path : "/projects"}];

    return(
        <header>
            <NavList value="blogs" links={blogsLinks}/>
            <NavList value="projects" links={projectsLinks}/>
        </header>
    );
}

export default header;