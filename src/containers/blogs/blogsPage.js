import React from 'react';
import {withRouter} from 'react-router-dom';
import { connect} from 'react-redux';
import {deleteBlogFromState ,loadBlogs} from '../../actions/blogs';
import Card from '../../components/UI/card/card';

import './blogsPage.css';
import { loadArabicTranslations } from '../../actions/blogsArabic';

class blogs extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            loadCount : 0
        }
    }

    componentDidMount(){
       this.props.loadBlogs(this.state.loadCount);
       this.props.loadArabicTranslations(this.state.loadCount);
    }

    editHandler = (blogId) =>{
        this.props.history.push(`/editBlog?blogId=${blogId}`);
    }

    addTranslationHandler = (blogId) =>{
        this.props.history.push(`addTranslation?blogId=${blogId}`);
    }

    editTranslationHandler = (blogId) =>{
        this.props.history.push(`editTranslatedBlog?blogId=${blogId}`);
    }

    proxyUrl = "https://aqueous-coast-32163.herokuapp.com/";

    deleteHandler = (id) =>{
        fetch(this.proxyUrl + 'https://rouqaya-api.herokuapp.com/removeBlog',{
            method : 'DELETE',
            headers : {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({
                id : id
            })
            }).then((res)=>{
                return res.json();
            }).then((res)=>{
                if(res.success){
                    this.props.deleteBlogFromState(id);
                }
            }).catch((err)=>{
                console.log(err);
            });
    }

    render() {
        const blogs = this.props.blogs ? this.props.blogs.map((blogData)=>{

            const isTranslated = this.props.translations.map((translation)=>{
                if(translation.id === blogData.id){
                    return true;
                }
                return false;
            });
            return <Card title={blogData.title} imgPath={blogData.img_url}
            editHandler={()=>this.editHandler(blogData.id)}
            deleteHandler={()=>this.deleteHandler(blogData.id)}
            editTranslationHandler = {()=>this.editTranslationHandler(blogData.id)}
            addTranslationHandler = {()=>this.addTranslationHandler(blogData.id)}
            isTranslated = {isTranslated}
            key={blogData.id}/>
        }) : "no blogs to display";

        return(
            <main className="blogsPage">
                {blogs}
            </main>
        );
    }
}

const mapStateToProps = (state) =>{
    return{
        blogs : state.blogs.blogs,
        translations : state.blogs.translations
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        deleteBlogFromState : (id) => {dispatch(deleteBlogFromState(id))},
        loadBlogs : (loadCount) =>{dispatch(loadBlogs(loadCount))},
        loadArabicTranslations : (loadCount) =>{dispatch(loadArabicTranslations(loadCount))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(blogs));