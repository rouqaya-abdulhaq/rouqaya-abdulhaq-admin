import React from 'react';
import {withRouter} from 'react-router-dom';
import { connect} from 'react-redux';
import {deleteBlogFromState ,loadBlogs} from '../../actions/blogs';
import Card from '../../components/UI/card/card';

import './blogsPage.css';

class blogs extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            loadCount : 0
        }
    }

    componentDidMount(){
       this.props.loadBlogs(this.state.loadCount);
    }

    editHandler = (blogTitle,blogId) =>{
        this.props.history.push(`/editBlog?blogTitle=${blogTitle}&blogId=${blogId}`);
    }

    deleteHandler = (index,id) =>{
        fetch('http://localhost:8000/removeBlog',{
            method : 'DELETE',
            headers : {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({
                index : index
            })
            }).then((res)=>{
                if(res){
                    this.props.deleteBlogFromState(id);
                }
            }).catch((err)=>{
                console.log(err);
            });
    }

    render() {
        const blogs = this.props.blogs ? this.props.blogs.map((blogData,index)=>{
            return <Card title={blogData.title} imgPath={blogData.img_url}
            editHandler={()=>this.editHandler(blogData.title,blogData.id)}
            deleteHandler={()=>this.deleteHandler(index,blogData.id)}
            index = {index}
            key={blogData.title}/>
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
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        deleteBlogFromState : (id) => {dispatch(deleteBlogFromState(id))},
        loadBlogs : (loadCount) =>{dispatch(loadBlogs(loadCount))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(blogs));