import * as actionTypes from './actionTypes';

function getCategoriesSuccess(categories){
    return{
        type:actionTypes.GET_CATEGORIES_SUCCESS,
        payload:categories
    }
}

export function getCategories(){
    return function(dispatch){
        let url = "/api/v1/categories"

        fetch(url)
        .then(res => res.json())
        .then(result => dispatch(getCategoriesSuccess(result)))
    }
    
}