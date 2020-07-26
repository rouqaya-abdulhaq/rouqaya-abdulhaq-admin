import React from 'react';

class About extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            about : ""
        }
    }

    componentDidMount(){
        this.loadAbout();
    }

    loadAbout = () =>{
        fetch('http://localhost:8000/loadAbout',{
            method : 'GET',
            headers : {
                'Accept': 'application/json',
            },
        }).then((res)=>{
            return res.json();
        }).then((res)=>{
            if(res.success){
                const about = {...res.about};
                this.setState({about : about.content});
            }
        }).catch((err)=>{
            console.log(err);
        })
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