import React from 'react';
import './addBlog.css';

class AddBlog extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            blog : {
                title : "",
                content : ""
            }
        }
    }

    titleEventHandler = (event) =>{
        this.setState({
            blog :  {
                title : event.target.value,
                content : this.state.blog.content
            }
        })
    }

    contentEventHandler = (event) =>{
        this.setState({
            blog :  {
                content : event.target.value,
                title : this.state.blog.title
            }
        })
    }

    submitBlogHandler = () =>{
        this.fetchSubmit();
    }

    fetchSubmit = () =>{
        fetch("http://localhost:8000/postBlog",{
            method : 'PUT',
            headers : {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({
                title : this.state.blog.title,
                content : this.state.blog.content
            })
        }).then((res)=>{
            return res.json();
        }).then((blog)=>{
            console.log(blog);
        }).catch((err)=>{
            console.log(err)
        })
    }

    render(){
        return(
            <main className="addBlogPage">
                <input className="title" onChange={this.titleEventHandler} placeholder="title"></input>
                <textarea  onChange={this.contentEventHandler} placeholder="content"></textarea>
                <button onClick={this.submitBlogHandler}>SUBMIT</button>
            </main>
        );
    }
}

export default AddBlog;