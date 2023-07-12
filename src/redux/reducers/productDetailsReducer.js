import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function(state=initialState.product,action){
    switch(action.type){
        case actionTypes.GET_PRODUCT_DETAILS_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}