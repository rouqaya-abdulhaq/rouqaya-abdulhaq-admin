import React from 'react';
import './about.css';

class About extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            about : "",
            aboutTranslation : "",
        }
    }

    componentDidMount(){
        this.loadAbout();
        this.loadAboutTranslation();
    }

    proxyUrl = "https://aqueous-coast-32163.herokuapp.com/";

    loadAbout = () =>{
        fetch(this.proxyUrl + 'https://rouqaya-api.herokuapp.com/loadAbout',{
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

    loadAboutTranslation = () =>{
        fetch(this.proxyUrl + 'https://rouqaya-api.herokuapp.com/loadAboutTranslation',{
            method : 'GET',
            headers : {
                'Accept': 'application/json',
            },
        }).then((res)=>{
            return res.json();
        }).then((res)=>{
            if(res.success){
                const about = {...res.about};
                this.setState({aboutTranslation : about.content});
            }
        }).catch((err)=>{
            console.log(err);
        })
    }

    editAbout = () =>{
        fetch(this.proxyUrl + 'https://rouqaya-api.herokuapp.com/editAbout',{
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

    editAboutTranslation = () =>{
        fetch(this.proxyUrl + 'https://rouqaya-api.herokuapp.com/editAboutTranslation',{
            method : 'PUT',
            headers : {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({
                data : {
                    content : this.state.aboutTranslation
                }
            })
        }).then((res)=>{
            return res.json();
        }).then((res)=>{
            if(res.success){
                const about = {...res.about};
                this.setState({aboutTranslation : about.content});
            }
        }).catch((err)=>{
            console.log(err);
        })
    }

    changeEventHandler = (event) =>{
        this.setState({about : event.target.value});
    }

    translationChangeEventHandler = (event) =>{
        this.setState({aboutTranslation : event.target.value});
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
                <hr/>
                <textarea dir="rtl" onChange={this.translationChangeEventHandler} 
                    placeholder="محتوى" value={this.state.aboutTranslation|| ''}>
                </textarea>
                <button onClick={this.editAboutTranslation}>
                    Submit
                </button>
            </main>
        );
    }
}

export default About;