import * as actionTypes from './actionTypes';

function addToCartSuccess(product){
    return{
        type:actionTypes.POST_ADD_TO_CART,
        payload:product
    }
}

export function addToCart(userId,productSlug){
    return function(dispatch){
        let url = "/api/v1/cart/addToCart?userId="+userId+"&productSlug="+productSlug

        fetch(url,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            }
        })
        .then((res) => res.json())
        .then((result) => { console.log(result)
    }).catch((err)=> console.log(err))
    }
    }