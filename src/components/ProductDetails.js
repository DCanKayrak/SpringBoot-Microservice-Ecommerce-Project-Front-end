import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as productActions from '../redux/actions/productActions';
import * as productDetailsActions from '../redux/actions/productDetailsActions';
import * as categoryActions from '../redux/actions/categoryActions';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate } from "react-router";
import alertify from 'alertifyjs';



function ProductDetails(props) {
    const { slug } = useParams();
    const navigate = useNavigate();

    const addToCart = () => {
        fetch("/api/v1/cart/addToCart",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                userId: localStorage.getItem("currentUser"),
                productSlug: slug
            }),
        })
        .then((res) => res.json())
        .then((res) => console.log(res))
        .catch((err)=> console.log(err))
    }

    const handleAddToCart = () => {
        addToCart()
        alertify.alert("Ürün eklendi!")
        navigate("/")
    }

    useEffect(() => {
        props.actions.getProductsWithSlug(slug);
    }, []);


    return (
        <div>
            <div className='product-details-container'>
                <div className='product-details-left'>
                    <img src={props.product.imageUrl} className='details-img' />
                </div>
                <div className='product-details-right'>
                    <div className='product-details-top'>
                        <h3>{props.product.name}</h3>
                        <hr></hr>
                        <div className='favorite-div'>
                            <span class="icon-ribbon product-favorite-button"></span>
                        </div>
                        <p className='text-black'>{props.product.description}</p>
                    </div>

                    <div className='product-details-down'>
                        <div className='product-details-pricing'>
                            <div className='details-mid-left'>
                                <p className='text-black pricing-text'>
                                    <span className='price-text'>{props.product.price} TL</span><div className='badge bg-sale'>-%{props.product.discountRate}</div>
                                </p>
                                <p className='pricing-after-discount'>
                                    {props.product.afterDiscount} TL
                                </p>

                                <form>
                                <button onClick={() => handleAddToCart()} className='button-add-to-cart btn-xl'>Sepete Ekle!</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>


            </div>



        </div>
    )
}

function mapStateToProps(state) {
    return {
        "products": state.productReducer,
        "categories": state.categoryReducer,
        "product": state.productDetailsReducer,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        "actions": {
            "getProductsWithSlug": bindActionCreators(productDetailsActions.getProductsWithSlug, dispatch),
            "getProducts": bindActionCreators(productActions.getProducts, dispatch),
            "getCategories": bindActionCreators(categoryActions.getCategories, dispatch),
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);