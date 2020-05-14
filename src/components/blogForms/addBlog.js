import React from 'react';
import BlogForm from '../../containers/blogs/blogForm/blogForm';

const addBlog = () =>{

    const fetchSubmit = (blog) =>{
        fetch("http://localhost:8000/postBlog",{
            method : 'PUT',
            headers : {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({
                title : blog.title,
                content : blog.content
            })
        }).then((res)=>{
            return res.json();
        }).then((blog)=>{
            console.log(blog);
        }).catch((err)=>{
            console.log(err)
        })
    }

    return(
        <BlogForm submitHandler={fetchSubmit}/> 
    );
}

export default addBlog;