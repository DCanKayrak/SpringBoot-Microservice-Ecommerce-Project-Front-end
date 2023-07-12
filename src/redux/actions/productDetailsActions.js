import * as actionTypes from './actionTypes';


function getProductDetailsSuccess(product){
    return{
        type:actionTypes.GET_PRODUCT_DETAILS_SUCCESS,
        payload:product
    }
}


export function getProductsWithSlug(productSlug){
    return function(dispatch){
        let url = "/api/v1/products/details/"+productSlug;

        fetch(url)
        .then(res => res.json())
        .then(result => dispatch(getProductDetailsSuccess(result)))
    }
    
}