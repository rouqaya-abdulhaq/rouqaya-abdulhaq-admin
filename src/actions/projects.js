import * as actionTypes from './actionTypes';

export const addProject = (project) =>{
   return {
    type : actionTypes.ADD_PROJECT,
    project : project
   } 
}

export const editProject = (project,title) =>{
    return {
        type : actionTypes.EDIT_PROJECT,
        project : project,
        title : title
    } 
}

export const deleteProject = (title) =>{
    return {
        type : actionTypes.DELETE_PROJECT,
        title : title
    } 
}
