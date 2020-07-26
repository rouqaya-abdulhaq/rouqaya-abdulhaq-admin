import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import queryString from 'querystring';
import BlogForm from '../../containers/blogs/blogForm/blogForm';
import {AddArabicTranslation} from '../../actions/blogsArabic';

const AddBlogTranslation = (props) =>{

    const values = queryString.parse(props.location.search.slice(1));
    const id = values.blogId;

    const fetchSubmit = (blog) =>{
        fetch(`http://localhost:8000/translateBlogArabic`,{
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
                props.AddArabicTranslation(res.blog);
            }
        }).catch((err)=>{
            console.log(err)
        })
    }

    return(
        <div>
            <BlogForm id={id} readOnly={true} />
            <hr/>
            <BlogForm  id={id} translation={true} load={false} submitHandler = {fetchSubmit}/>
        </div>
    );
}

const mapDispatchToProps = (dispatch) =>{
    return {
        AddArabicTranslation : (newTranslation) =>{dispatch(AddArabicTranslation(newTranslation))}
    }
}

export default connect(null,mapDispatchToProps)(withRouter(AddBlogTranslation));