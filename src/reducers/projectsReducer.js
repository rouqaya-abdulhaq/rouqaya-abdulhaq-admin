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
            const {eidtProjectId,editedProject} = action.payload;
            const newarr = state.projects.map((project)=>{
                if(project.id === eidtProjectId){
                    project = {...editedProject};
                }
                return project;
            });
            return {
                ...state,
                projects : newarr};

        case actionTypes.DELETE_PROJECT :
            const {projectId} = action.payload; 
            const arr =  state.projects.filter((project)=>{
                return project.id !== projectId;
            });
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

export default reducer;