import React from 'react';
import {Switch, Route} from 'react-router-dom';
import LandingPage from '../layout/landingPage/landingPage';
import AddBlog from '../blogForms/addBlog';
import AddProject from '../projectForms/addProject';
import Blogs from '../../containers/blogs/blogsPage';
import Projects from '../../containers/projects/projectsPage';
import EditBlog from '../blogForms/editBlog';
import EditProject from '../projectForms/editProject';
import AddBlogTranslation from '../blogForms/addBlogTranslation';
import EditTranslatedBlog from '../blogForms/editTranslatedBlog';
import About from '../../containers/about/aboutPage';

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
            <Route path="/addTranslation" component={AddBlogTranslation}/>
            <Route path="/editTranslatedBlog" component={EditTranslatedBlog}/>
            <Route path="/about" component={About}/>
        </Switch>
    );
}

export default router;
