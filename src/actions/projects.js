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
            eidtProjectId : id,
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
