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
        console.log(this.state.blog.title);
        console.log(this.state.blog.content);
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