import React from 'react';
import {Switch, Route} from 'react-router-dom';
import LandingPage from '../layout/landingPage/landingPage';
import AddBlog from '../../containers/addBlog/addBlog';
import AddProject from '../../containers/addProject/addProject';
import Blogs from '../layout/blogs/blogs';
import Projects from '../layout/projects/projects';

const router = () =>{
    return(
        <Switch>
            <Route path="/" exact component={LandingPage}/>
            <Route path="/addBlog" component={AddBlog}/>
            <Route path="/addProject" component={AddProject}/>
            <Route path="/blogs" component={Blogs}/>
            <Route path="/projects" component={Projects}/>
        </Switch>
    );
}

export default router;
