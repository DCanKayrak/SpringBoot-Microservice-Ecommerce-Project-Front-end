import * as actionTypes from './actionTypes';

function getCategoriesSuccess(category){
    return{
        type:actionTypes.GET_CATEGORIES_SECTION,
        payload:category
    }
}

export function getCategories(slug){
    return function(dispatch){
        let url = "/api/v1/categories/"+slug

        fetch(url)
        .then(res => res.json())
        .then(result => dispatch(getCategoriesSuccess(result)))
    }
    
}