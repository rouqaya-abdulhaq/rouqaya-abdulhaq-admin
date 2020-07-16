import React from 'react';
import {withRouter} from 'react-router-dom';
import queryString from 'querystring';
import BlogForm from '../../containers/blogs/blogForm/blogForm';

const TranslateBlog = (props) =>{

    const values = queryString.parse(props.location.search.slice(1));
    const id = values.blogId;

    const fetchSubmit = (blog) =>{
        console.log(blog);
    }

    return(
        <div>
            <BlogForm id={id} readOnly={true} />
            <hr/>
            <BlogForm  id={id} translation={true} submitHandler = {fetchSubmit}/>
        </div>
    );
}

export default withRouter(TranslateBlog);