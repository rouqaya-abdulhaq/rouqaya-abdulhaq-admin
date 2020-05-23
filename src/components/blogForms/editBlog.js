import React from 'react';
import {connect} from 'react-redux';
import queryString from 'querystring';
import {withRouter} from 'react-router-dom';
import {editBlogInState} from '../../actions/blogs';
import BlogForm from '../../containers/blogs/blogForm/blogForm';

const EditBlog = (props) =>{

    const values = queryString.parse(props.location.search.slice(1));
    const title = values.blogTitle;
    const id = values.blogId;

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
            props.editBlogInState(blog,id);
        }).catch((err)=>{
            console.log(err)
        })
    }

    return(
        <BlogForm title={title} submitHandler={fetchEdit} />
    );
}

const mapDispatchToProps = (dispatch) =>{
    return{
        editBlogInState : (blog,id) => {dispatch(editBlogInState(blog,id))}
    }
}

export default connect(null,mapDispatchToProps)(withRouter(EditBlog));