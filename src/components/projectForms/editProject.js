import React from 'react';
import queryString from 'querystring';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {editProjectInState} from '../../actions/projects';
import ProjectForm from '../../containers/projects/projectForm/projectForm';

const EditProject = (props) =>{
    
    const values = queryString.parse(props.location.search.slice(1));
    const id = values.projectId;

    const proxyUrl = "https://aqueous-coast-32163.herokuapp.com/";

    async function fetchEdit  (project) {
        fetch(proxyUrl + `https://rouqaya-api.herokuapp.com/editProject?projectId=${id}`,{
            method : 'PUT',
            headers : {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({
                updatedProject : {
                    github : project.github,
                    imgUrl : project.imgUrl,
                    title : project.title,
                    info : project.info,
                    url : project.url,
                    id : id,
                    disableUrl : project.disableUrl
                }
            })
        }).then((res)=>{
            return res.json();
        }).then((res)=>{
            if(res.success){
                props.editProjectInState(res.project,id);
            }
        }).catch((err)=>{
            console.log(err)
        })
    }

    return(
        <ProjectForm id={id} submitHandler={fetchEdit} />
    );
}

const mapDispatchToProps = (dispatch) =>{
    return{
        editProjectInState : (project,projectId) => dispatch(editProjectInState(project,projectId))
    }
}

export default connect(null,mapDispatchToProps)(withRouter(EditProject));