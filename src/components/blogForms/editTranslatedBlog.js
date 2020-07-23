import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import queryString from 'querystring';
import BlogForm from '../../containers/blogs/blogForm/blogForm';
import {editArabicTranslation} from '../../actions/blogsArabic';

const EditTranslatedBlog = (props) =>{

    const values = queryString.parse(props.location.search.slice(1));
    const id = values.blogId;

    const fetchSubmit = (blog) =>{
        fetch(`http://localhost:8000/EditBlogArabic`,{
            method : 'POST',
            headers : {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({
                translatedBlog: {
                    title : blog.title,
                    content : blog.content,
                    id : id
                }
            })
        }).then((res)=>{
            return res.json();
        }).then((res)=>{
            if(res.success){
                props.editArabicTranslation(res.blog,id);
            }
        }).catch((err)=>{
            console.log(err)
        })
    }

    return(
        <div>
            <BlogForm id={id} readOnly={true} />
            <hr/>
            <BlogForm  id={id} translation={true} load={true} submitHandler = {fetchSubmit}/>
        </div>
    );
}

const mapDispatchToProps = (dispatch) =>{
    return {
        editArabicTranslation : (translation,id) =>{dispatch(editArabicTranslation(translation,id))}
    }
}

export default connect(null,mapDispatchToProps)(withRouter(EditTranslatedBlog));