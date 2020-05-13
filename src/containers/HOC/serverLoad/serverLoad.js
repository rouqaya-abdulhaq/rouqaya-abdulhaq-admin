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

    updateState = (newState) =>{
        this.setState({serverData : newState});
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
            console.log(data);
            this.setState({serverData : data});
        }).catch((err)=>{
            console.log(err)
        })
    }


    render(){
        // console.log(this.state.serverData);
        const children = React.Children.map(this.props.children, child =>{
            return React.cloneElement(child, {
                serverData : this.state.serverData,
                updateState : this.updateState
            });
        });
        return(
            <div>{children}</div>
        );
    }
}

export default ServerLoad;