import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function(state=initialState.cart,action){
    switch(action.type){
        case actionTypes.GET_PRODUCT_USER_CART:
            return action.payload;
        default:
            return state;
    }
}