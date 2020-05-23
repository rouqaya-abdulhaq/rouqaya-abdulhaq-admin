import React from 'react';
import {connect} from 'react-redux';
import {addBlogToState} from '../../actions/blogs';
import BlogForm from '../../containers/blogs/blogForm/blogForm';

const addBlog = (props) =>{

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
            props.addBlogToState(blog);
        }).catch((err)=>{
            console.log(err)
        })
    }

    return(
        <BlogForm submitHandler={fetchSubmit}/> 
    );
}

const mapDispatchToProps = (dispatch) =>{
    return{
        addBlogToState : (blog) => {dispatch(addBlogToState(blog))}
    }
}

export default connect(null,mapDispatchToProps)(addBlog);