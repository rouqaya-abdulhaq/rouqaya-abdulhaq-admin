import React ,{useState, useEffect} from 'react';
import queryString from 'querystring';
import {withRouter} from 'react-router-dom';
import BlogForm from '../../containers/blogForm/blogForm';

const EditBlog = (props) =>{

    const [blogToEdit , setBlog] = useState(null);

    const values = queryString.parse(props.location.search.slice(1));
    const title = values.blogTitle;

    useEffect(()=>{ 
        fetch(`http://localhost:8000/loadBlog?blogTitle=${title}`,{
            method : 'GET',
            headers : {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then((res)=>{
            return res.json();
        }).then((blog)=>{
            setBlog(blog);
        }).catch((err)=>{
            console.log(err);
        });
    },[title]);

    const fetchEdit = (blog) =>{
        console.log(blog);
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
            console.log(blog);
            setBlog(blog);
        }).catch((err)=>{
            console.log(err)
        })
    }

    return(
        <BlogForm blog={blogToEdit} submitHandler={fetchEdit}/>
    );
}

export default withRouter(EditBlog);