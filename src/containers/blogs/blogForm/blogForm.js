import React from 'react';
import {withRouter} from 'react-router-dom'
import './blogForm.css';


class BlogForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            blog : {
                title : "",
                content : "",
                imgUrl : ""
            }
        }
        this.baseState = this.state;
    }

    componentDidMount(){
        this.loadBlog();
    }

    shouldComponentUpdate(nextProps,nextState){
        if(nextState === this.state){
            return false;
        }else{
            return true;
        }
    }

    loadBlog = () =>{
       if(this.props.id){
        fetch(`http://localhost:8000/loadBlog?blogId=${this.props.id}`,{
            method : 'GET',
            headers : {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then((res)=>{
            return res.json();
        }).then((res)=>{
            if(res.success){
                const blog = {...res.blog, imgUrl : res.blog.img_url}
                this.setState({blog : blog});
            }
        }).catch((err)=>{
            console.log(err);
        });
       } 
    }

    titleEventHandler = (event) =>{
        this.setState({
            blog :  {
                title : event.target.value,
                content : this.state.blog.content,
                imgUrl : this.state.blog.imgUrl
            }
        })
    }

    imgUrlEventHandler = (event) =>{
        this.setState({
            blog :  {
                imgUrl : event.target.value,
                content : this.state.blog.content,
                title : this.state.blog.title
            }
        })
    }

    contentEventHandler = (event) =>{
        this.setState({
            blog :  {
                content : event.target.value,
                title : this.state.blog.title,
                imgUrl : this.state.blog.imgUrl
            }
        })
    }

    submitBlogHandler = () =>{
        this.props.submitHandler(this.state.blog);
        this.setState(this.baseState);
        this.props.history.push('/blogs');
    }

    render(){
        return(
            <main className="addBlogPage">
                <input className="title" onChange={this.titleEventHandler} 
                    placeholder="title" value={this.state.blog.title || ''}>
                </input>
                <input className="imgUrl" onChange={this.imgUrlEventHandler} 
                    placeholder="img url" value={this.state.blog.imgUrl || ''}>
                </input>
                <textarea  onChange={this.contentEventHandler} 
                    placeholder="content" value={this.state.blog.content || ''}>
                </textarea>
                <button onClick={this.submitBlogHandler}>SUBMIT</button>
            </main>
        );
    }
}

export default withRouter(BlogForm);