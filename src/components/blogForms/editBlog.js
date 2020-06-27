import React from 'react';
import {connect} from 'react-redux';
import queryString from 'querystring';
import {withRouter} from 'react-router-dom';
import {editBlogInState} from '../../actions/blogs';
import BlogForm from '../../containers/blogs/blogForm/blogForm';

const EditBlog = (props) =>{

    const values = queryString.parse(props.location.search.slice(1));
    const id = values.blogId;

    const fetchEdit = (blog) =>{
        fetch(`http://localhost:8000/editBlog?blogId=${id}`,{
            method : 'PUT',
            headers : {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({
                updatedBlog : {
                    title : blog.title,
                    content : blog.content,
                    imgUrl : blog.imgUrl,
                    id : id
                }
            })
        }).then((res)=>{
            return res.json();
        }).then((res)=>{
            if(res.success){
                props.editBlogInState(res.blog,id);

            }
        }).catch((err)=>{
            console.log(err)
        })
    }

    return(
        <BlogForm id={id} submitHandler={fetchEdit} />
    );
}

const mapDispatchToProps = (dispatch) =>{
    return{
        editBlogInState : (blog,id) => {dispatch(editBlogInState(blog,id))}
    }
}

export default connect(null,mapDispatchToProps)(withRouter(EditBlog));