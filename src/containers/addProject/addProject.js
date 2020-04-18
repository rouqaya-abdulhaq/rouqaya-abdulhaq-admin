import React from 'react';
import './addProject.css';

class AddProject extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            title : "",
            info : "",
            url : "",
            imgUrl : ""
        }
        this.baseState = this.state;
    }

    onChangeTitle = (value) =>{
        this.setState({
            title : value
        });
    }

    onChangeInfo = (value) =>{
        this.setState({
            info : value
        });
    }

    onChangeUrl = (value) =>{
        this.setState({
            url : value
        });
    }

    onChangeImgUrl = (value) =>{
        this.setState({
            imgUrl : value
        });
    }

    onSubmit = () =>{
        this.fetchSubmit();
        this.setState(this.baseState);
    }

    fetchSubmit = () =>{
        fetch("http://localhost:8000/addProject",{
            method : 'POST',
            headers : {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({
                title : this.state.title,
                info : this.state.info,
                url : this.state.url,
                imgUrl : this.state.imgUrl
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
            <main>
                <form>
                    <input placeholder="title" onChange={(event)=>this.onChangeTitle(event.target.value)}
                        value={this.state.title}>
                    </input>
                    <input placeholder="url" onChange={(event)=>this.onChangeUrl(event.target.value)}
                        value={this.state.url}>
                    </input>
                    <input placeholder="img url" onChange={(event)=>this.onChangeImgUrl(event.target.value)}
                        value={this.state.imgUrl}>
                    </input>
                    <textarea placeholder="info" onChange={(event)=>this.onChangeInfo(event.target.value)}
                        value={this.state.info}>
                    </textarea>
                    <button type="button" onClick={this.onSubmit}>submit</button>
                </form>
            </main>
        );
    }
}

export default AddProject;