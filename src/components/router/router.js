import React from 'react';
import {Switch, Route} from 'react-router-dom';
import LandingPage from '../layout/landingPage/landingPage';
import AddBlog from '../blogForms/addBlog';
import AddProject from '../projectForms/addProject';
import Blogs from '../layout/blogs/blogs';
import Projects from '../../containers/projects/projectsPage';
import EditBlog from '../blogForms/editBlog';
import EditProject from '../projectForms/editProject';

const router = () =>{
    return(
        <Switch>
            <Route path="/" exact component={LandingPage}/>
            <Route path="/addBlog" component={AddBlog}/>
            <Route path="/addProject" component={AddProject}/>
            <Route path="/blogs" component={Blogs}/>
            <Route path="/projects" component={Projects}/>
            <Route path="/editBlog" component={EditBlog}/>
            <Route path="/editProject" component={EditProject}/>
        </Switch>
    );
}

export default router;
