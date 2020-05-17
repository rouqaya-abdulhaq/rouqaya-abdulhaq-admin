import * as actionTypes from '../actions/actionTypes';

const reducer = (state = [], action) =>{
    switch(action.type){
        case actionTypes.ADD_PROJECT :
            const {newProject} = action.payload; 
            return [...state, newProject]

        case actionTypes.EDIT_PROJECT :
            const {projetId,editedProject} = action.payload;
            return state.map((project)=>{
                if(project.id === projetId){
                    project = {...editedProject};
                }
                return project;
            });

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