import React from 'react';
import {Switch, Route} from 'react-router-dom';

const router = () =>{
    return(
        <Switch>
            <Route path="./addBlog"/>
            <Route path="./addProject"/>
        </Switch>
    );
}

export default router;
