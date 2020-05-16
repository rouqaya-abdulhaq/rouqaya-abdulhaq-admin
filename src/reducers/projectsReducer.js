import * as actionTypes from '../actions/actionTypes';

const reducer = (state = {}, action) =>{
    switch(action.type){
        case actionTypes.ADD_PROJECT :
            return {...state, project : action.project}
        case actionTypes.EDIT_PROJECT :
            return {...state, project : action.project}
        case actionTypes.DELETE_PROJECT :
            return {...state, project : action.project}
        default : 
            return state;
    }
}

export default reducer;