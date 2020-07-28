import React from 'react';
import './about.css';

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

    editAbout = () =>{
        fetch('http://localhost:8000/editAbout',{
            method : 'PUT',
            headers : {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({
                data : {
                    content : this.state.about
                }
            })
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

    render(){
        return(
            <main className="aboutPage">
                <textarea onChange={this.changeEventHandler} 
                    placeholder="content" value={this.state.about|| ''}>
                </textarea>
                <button onClick={this.editAbout}>
                    Submit
                </button>
            </main>
        );
    }
}

export default About;