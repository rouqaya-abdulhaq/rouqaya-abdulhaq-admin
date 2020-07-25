import React from 'react';

class About extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            about : ""
        }
    }

    changeEventHandler = (event) =>{
        this.setState({about : event.target.value});
    }

    submitEventHandler = () =>{
        console.log(this.state.about);
    }

    render(){
        return(
            <main>
                <textarea  onChange={this.changeEventHandler} 
                    placeholder="content" value={this.state.about|| ''}>
                </textarea>
                <button onClick={this.submitEventHandler}>
                    Submit
                </button>
            </main>
        );
    }
}

export default About;