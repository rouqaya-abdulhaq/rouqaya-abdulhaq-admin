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

        fetch(`http://localhost:8000/loadProjects?loadCount=${loadCount}`,{
            method : 'GET',
            headers : {
                'Accept' : 'application/json',
            }
        }).then((res)=>{
            return res.json();
        }).then((projectsData)=>{
            dispatch(loadProjectsSuccess(projectsData));
        }).catch((err)=>{
            dispatch(loadProjectsFail(err));
        })
    }
}

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
