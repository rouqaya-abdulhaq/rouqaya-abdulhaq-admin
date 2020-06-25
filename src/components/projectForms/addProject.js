import React from 'react';
import {connect} from 'react-redux';
import {addProjectToState} from '../../actions/projects';
import ProjectForm from '../../containers/projects/projectForm/projectForm';

const addProject = (props) =>{

    const fetchSubmit = (project) =>{
        const projData = {
            title : project.title,
            url : project.url,
            imgUrl : project.imgUrl,
            info : project.info
        }
        
        fetch("http://localhost:8000/addProject",{
            method : 'POST',
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body : JSON.stringify({
                project : projData
            })
        }).then((res)=>{
            return res.json();
        }).then((res)=>{
            if(res.success){
                props.addProjectToState(res.project);
            }
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