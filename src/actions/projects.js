import * as actionTypes from './actionTypes';

export const addProject = (project) =>{
   return {
    type : actionTypes.ADD_PROJECT,
    payload : {
        newProject : project
    }
   } 
}

export const editProject = (project,id) =>{
    return {
        type : actionTypes.EDIT_PROJECT,
        payload : {
            projectId : id,
            editedProject : project
        }
    } 
}

export const deleteProject = (id) =>{
    return {
        type : actionTypes.DELETE_PROJECT,
        payload : {
            projectId : id
        }
    } 
}
