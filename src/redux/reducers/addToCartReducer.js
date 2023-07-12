import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function(state=initialState.addToCart,action){
    switch(action.type){
        case actionTypes.POST_ADD_TO_CART:
            return action.payload;
        default:
            return state;
    }
}