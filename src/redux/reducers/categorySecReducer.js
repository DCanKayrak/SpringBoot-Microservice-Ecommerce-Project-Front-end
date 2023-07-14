import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function getCategories(state=initialState.category,action){
    switch(action.type){
        case actionTypes.GET_CATEGORIES_SECTION:
            return action.payload;
        default:
            return state;
    }
}

