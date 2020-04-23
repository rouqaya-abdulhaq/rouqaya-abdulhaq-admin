import React from 'react';
import ServerLoad from '../../../containers/HOC/serverLoad/serverLoad';
import BlogsPage from './blogsPage';

const blogs = (props) =>{
    return(
    <ServerLoad url={'http://localhost:8000/loadBlogs?loadCount=0'}>
        <BlogsPage/>
    </ServerLoad>
    );
}

export default blogs;