import React from 'react';
import './blogForm.css';

class BlogForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            blog : {
                title : "",
                content : ""
            }
        }
        this.baseState = this.state;
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
        this.setState(this.baseState);
    }

    render(){
        return(
            <main className="addBlogPage">
                <input className="title" onChange={this.titleEventHandler} 
                    placeholder="title" value={this.state.blog.title}>
                </input>
                <textarea  onChange={this.contentEventHandler} 
                    placeholder="content" value={this.state.blog.content}>
                </textarea>
                <button onClick={()=>this.props.submitHandler(this.state.blog)}>SUBMIT</button>
            </main>
        );
    }
}

export default BlogForm;