import React from 'react';
import queryString from 'querystring';
import {withRouter} from 'react-router-dom';
import BlogForm from '../../containers/blogForm/blogForm';

const EditBlog = (props) =>{

    const values = queryString.parse(props.location.search.slice(1));
    const title = values.blogTitle;

    const fetchEdit = (blog) =>{
        fetch(`http://localhost:8000/editBlog?blogTitle=${title}`,{
            method : 'PUT',
            headers : {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({
                updatedBlog : {
                    title : blog.title,
                    content : blog.content 
                }
            })
        }).then((res)=>{
            return res.json();
        }).then((blog)=>{
            return blog;
        }).catch((err)=>{
            console.log(err)
        })
    }

    return(
        <BlogForm title={title} submitHandler={fetchEdit} />
    );
}

export default withRouter(EditBlog);