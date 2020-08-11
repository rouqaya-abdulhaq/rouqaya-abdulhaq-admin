import * as actionTypes from './actionTypes';

export const addProjectToState = (project) =>{
   return {
    type : actionTypes.ADD_PROJECT,
    payload : {
        newProject : project
    }
   } 
}

export const editProjectInState = (project,id) =>{
    return {
        type : actionTypes.EDIT_PROJECT,
        payload : {
            editProjectId : id,
            editedProject : project
        }
    } 
}

export const deleteProjectFromState = (id) =>{
    return {
        type : actionTypes.DELETE_PROJECT,
        payload : {
            projectId : id
        }
    } 
}

export const loadProjects = (loadCount) =>{
    return dispatch => {
        dispatch(loadProjectsStart());

        fetch(proxyUrl + `https://rouqaya-api.herokuapp.com/loadProjects?loadCount=${loadCount}`,{
            method : 'GET',
            headers : {
                'Accept' : 'application/json',
            }
        }).then((res)=>{
            return res.json();
        }).then((projectsData)=>{
            if(projectsData.success){
                dispatch(loadProjectsSuccess(projectsData.projects));
            }else{
                dispatch(loadProjectsFail(projectsData.message))
            }
        }).catch((err)=>{
            dispatch(loadProjectsFail(err));
        })
    }
}

const proxyUrl = "https://aqueous-coast-32163.herokuapp.com/";

const loadProjectsStart = () =>{
    return {
        type : actionTypes.LOAD_PROJECTS_START
    }
}

const loadProjectsSuccess = (projects) =>{
    return {
        type : actionTypes.LOAD_PROJECTS_SUCCESS,
        payload : {
            projects : projects
        }
    }
}

const loadProjectsFail = (err) =>{
    return {
        type : actionTypes.LOAD_PROJECTS_FAIL,
        payload : {
            err : err
        }
    }
}
