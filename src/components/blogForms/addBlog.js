import React from 'react';
import {connect} from 'react-redux';
import {addBlogToState} from '../../actions/blogs';
import BlogForm from '../../containers/blogs/blogForm/blogForm';

const addBlog = (props) =>{

    const proxyUrl = "https://aqueous-coast-32163.herokuapp.com/";

    const fetchSubmit = (blog) =>{
        fetch(proxyUrl + "https://rouqaya-api.herokuapp.com/postBlog",{
            method : 'PUT',
            headers : {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({
                blog : { title : blog.title,
                content : blog.content,
                imgUrl : blog.imgUrl
                }
            })
        }).then((res)=>{
            return res.json();
        }).then((res)=>{
            if(res.success){
                props.addBlogToState(res.blog);
            }
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