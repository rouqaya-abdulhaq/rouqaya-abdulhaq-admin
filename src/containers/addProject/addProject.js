import React from 'react';
import './addProject.css';

class AddProject extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            title : "",
            info : "",
            url : ""
        }
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

    onSubmit = () =>{
        console.log(this.state);
    }

    render(){
        return(
            <main>
                <form>
                    <input placeholder="title" onChange={(event)=>this.onChangeTitle(event.target.value)}></input>
                    <input placeholder="url" onChange={(event)=>this.onChangeUrl(event.target.value)}></input>
                    <textarea placeholder="info" onChange={(event)=>this.onChangeInfo(event.target.value)}></textarea>
                    <button type="button" onClick={this.onSubmit}>submit</button>
                </form>
            </main>
        );
    }
}

export default AddProject;