import * as actionTypes from './actionTypes';

function getProductsSuccess(products){
    return{
        type:actionTypes.GET_PRODUCT_USER_CART,
        payload:products
    }
}

export function getProducts(userId){
    return function(dispatch){

        if(userId){
            let url = "/api/v1/cart/"+userId
           
            fetch(url)
            .then(res => res.json())
            .then(result => dispatch(getProductsSuccess(result)))
        }
    }
    
}