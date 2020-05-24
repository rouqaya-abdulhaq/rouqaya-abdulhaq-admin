import * as actionTypes from '../actions/actionTypes';

const initialState = {
    projects : [],
    loading : false,
    err : null
}

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case actionTypes.ADD_PROJECT :
            const {newProject} = action.payload;
            return {
                ...state,
                projects : [...state.projects, newProject]}

        case actionTypes.EDIT_PROJECT :
            const {editProjectId,editedProject} = action.payload;
            const newarr = editProject(state,editedProject,editProjectId);
            return {
                ...state,
                projects : newarr};

        case actionTypes.DELETE_PROJECT :
            const {projectId} = action.payload; 
            const arr = deleteProject(state,projectId);
            return {
                ...state,
                projects : arr};

        case actionTypes.LOAD_PROJECTS_START :
            return {
                ...state,
                loading : true
            }

        case actionTypes.LOAD_PROJECTS_SUCCESS :
            const {projects} = action.payload;
            return {
                ...state,
                loading : false,
                err : null,
                projects : projects
            }
        
        case actionTypes.LOAD_PROJECTS_FAIL :
            const {err} = action.payload;
            return {
                ...state,
                loading : false,
                err : err
            }

        default : 
            return state;
    }
}

const editProject = (state,editedProject, editProjectId) =>{
    return state.projects.map((project)=>{
        if(parseInt(project.id,10) === parseInt(editProjectId,10)){
            project = JSON.parse(JSON.stringify(editedProject));
        }
        return project;
    });
}

const deleteProject = (state,projectId) =>{
    return state.projects.filter((project)=>{
        return parseInt(project.id,10) !== parseInt(projectId,10);
    });
}
export default reducer;