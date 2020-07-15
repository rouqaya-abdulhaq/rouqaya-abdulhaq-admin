import React from 'react';
import BlogForm from '../../containers/blogs/blogForm/blogForm';

const TranslateBlog = (props) =>{

    const fetchSubmit = (blog) =>{
        console.log(blog);
    }
    return(
        <div>
            <BlogForm submitHandler = {fetchSubmit}/>
        </div>
    );
}

export default TranslateBlog;