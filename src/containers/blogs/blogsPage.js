import React from 'react';
import {withRouter} from 'react-router-dom';
import { connect} from 'react-redux';
import {deleteBlogFromState} from '../../actions/blogs';
import Card from '../../components/UI/card/card';

import './blogsPage.css';

class blogs extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            blogs : [],
            loadCount : 0
        }
    }

    componentDidMount(){
        this.loadBlogs();
    }

    loadBlogs = () =>{
        fetch(`http://localhost:8000/loadBlogs?loadCount=${this.state.loadCount}`,{
            method : 'GET',
            headers : {
                'Accept' : 'application/json',
            }
        }).then((res)=>{
            return res.json();
        }).then((blogsData)=>{
            this.setState({blogs : blogsData});
        }).catch((err)=>{
            console.log(err)
        })
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
                return res.json();
            }).then((res)=>{
                this.props.deleteBlogFromState(id);
                this.setState({blogs : res});
            }).catch((err)=>{
                console.log(err);
            });
    }

    render() {
        const blogs = this.state.blogs ? this.state.blogs.map((blogData,index)=>{
            return <Card title={blogData.title} info={blogData.info}
            editHandler={()=>this.editHandler(blogData.title,blogData.id)}
            deleteHandler={()=>this.deleteHandler(index,blogData.id)}
            index = {index}
            page={`/blog?blog=${blogData.title}`}  key={blogData.title}/>
        }) : "no blogs to display";

        return(
            <main className="blogsPage">
                {blogs}
            </main>
        );
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        deleteBlogFromState : (id) => {dispatch(deleteBlogFromState(id))}
    }
}

export default connect(null,mapDispatchToProps)(withRouter(blogs));