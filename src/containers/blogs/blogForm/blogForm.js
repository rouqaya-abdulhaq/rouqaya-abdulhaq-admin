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
        this.loadTranslation();
    }

    shouldComponentUpdate(nextProps,nextState){
        if(nextState === this.state){
            return false;
        }else{
            return true;
        }
    }

    loadBlog = () =>{
       if(this.props.id && !this.props.translation){
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

    loadTranslation = () =>{
        if(this.props.translation && this.props.id){
            console.log("getting translation");
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

    submit = this.props.readOnly ? null : <button onClick={this.submitBlogHandler}>SUBMIT</button>

    render(){
        const img = this.props.translation ? null : <input className="imgUrl" onChange={this.imgUrlEventHandler} 
                                                        placeholder="img url" value={this.state.blog.imgUrl || ''}>
                                                    </input>
        return(
            <main className="addBlogPage">
                <input className="title" onChange={this.titleEventHandler} 
                    placeholder="title" value={this.state.blog.title || ''}>
                </input>
                {img}
                <textarea  onChange={this.contentEventHandler} 
                    placeholder="content" value={this.state.blog.content || ''}>
                </textarea>
                {this.submit}
            </main>
        );
    }
}

export default withRouter(BlogForm);