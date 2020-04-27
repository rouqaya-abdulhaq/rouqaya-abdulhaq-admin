import React from 'react';
import './projectForm.css';

class AddProject extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            project :{
                title : "",
                info : "",
                url : "",
                imgUrl : ""
            }
        }
        this.baseState = {...this.state.project};
    }

    onChangeTitle = (value) =>{
        this.setState({
            project : {
                ...this.state.project,
                title : value
            }
        });
    }

    onChangeInfo = (value) =>{
        this.setState({
            project : {
                ...this.state.project,
                info : value
            }
        });
    }

    onChangeUrl = (value) =>{
        this.setState({
            project : {
                ...this.state.project,
                url : value
            }
        });
    }

    onChangeImgUrl = (value) =>{
        this.setState({
            project : {
                ...this.state.project,
                imgUrl : value
            }
        });
    }

    onSubmit = () =>{
        this.props.submitHandler(this.state.project);
        this.setState({project : this.baseState});
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