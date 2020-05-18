import * as actionTypes from '../actions/actionTypes';

const reducer = (state = [{id : 1},{id:2},{id:3}], action) =>{
    switch(action.type){
        case actionTypes.ADD_PROJECT :
            const {newProject} = action.payload;
            return [...state, newProject]

        case actionTypes.EDIT_PROJECT :
            const {eidtProjectId,editedProject} = action.payload;
            const newarr = state.map((project)=>{
                if(project.id === eidtProjectId){
                    project = {...editedProject};
                }
                return project;
            });
            return newarr;

        case actionTypes.DELETE_PROJECT :
            const {projectId} = action.payload; 
            return state.filter((project)=>{
                return project.id !== projectId;
            });

        default : 
            return state;
    }
}

export default reducer;