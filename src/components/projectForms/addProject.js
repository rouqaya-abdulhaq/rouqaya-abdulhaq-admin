import React from 'react';
import {connect} from 'react-redux';
import {addProjectToState} from '../../actions/projects';
import ProjectForm from '../../containers/projects/projectForm/projectForm';

const addProject = (props) =>{

    const fetchSubmit = (project) =>{
        //add an id to the project in DB 
        const formData = new FormData();
        formData.append('img',project.img);
        formData.append('title',project.title);
        formData.append('info',project.info);
        formData.append('url',project.url);
        fetch("http://localhost:8000/addProject",{
            method : 'POST',
            headers : {
                'Accept': 'application/json',
            },
            body : formData
        }).then((res)=>{
            return res.json();
        }).then((project)=>{
            props.addProjectToState(project);
        }).catch((err)=>{
            console.log(err)
        })
    }

    return(
        <ProjectForm submitHandler={fetchSubmit}/> 
    );
}

const mapDispatchToProps = (dispatch) =>{
    return{
        addProjectToState : (project) => {dispatch(addProjectToState(project))}
    }
}

export default connect(null,mapDispatchToProps)(addProject);