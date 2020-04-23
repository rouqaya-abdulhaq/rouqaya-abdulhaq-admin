import React from 'react';

class ServerLoad extends React.Component{
    constructor (props){
        super(props);
        this.state = {
            serverData : []
        }
    }

    componentDidMount(){
        this.fetchFromServer();
    }

    fetchFromServer = () =>{
        fetch(this.props.url,{
            method : 'GET',
            headers : {
                'Accept' : 'application/json',
            }
        }).then((res)=>{
            return res.json();
        }).then((data)=>{
            this.setState({serverData : data});
        }).catch((err)=>{
            console.log(err)
        })
    }


    render(){
        const children = React.Children.map(this.props.children, child =>{
            return React.cloneElement(child, {
                serverData : this.state.serverData
            });
        });
        return(
            <div>{children}</div>
        );
    }
}

export default ServerLoad;