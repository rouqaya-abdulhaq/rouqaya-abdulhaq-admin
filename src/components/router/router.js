import React from 'react';
import {Switch, Route} from 'react-router-dom';
import LandingPage from '../layout/landingPage/landingPage';
import AddBlog from '../../containers/addBlog/addBlog';
import AddProject from '../../containers/addProject/addProject';

const router = () =>{
    return(
        <Switch>
            <Route path="/" exact component={LandingPage}/>
            <Route path="/addBlog" component={AddBlog}/>
            <Route path="/addProject" component={AddProject}/>
        </Switch>
    );
}

export default router;
