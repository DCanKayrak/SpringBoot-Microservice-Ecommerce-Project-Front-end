import * as actionTypes from './actionTypes';

function getProductsSuccess(products){
    return{
        type:actionTypes.GET_PRODUCTS_SUCCESS,
        payload:products
    }
}

export function getProducts(){
    return function(dispatch){
        let url = "/api/v1/products"
        


        fetch(url)
        .then(res => res.json())
        .then(result => dispatch(getProductsSuccess(result)))
    }
    
}