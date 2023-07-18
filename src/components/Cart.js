import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as productCartActions from '../redux/actions/productCartActions';


function Cart(props) {

    const [totalPrice,setTotalPrice] = useState(0);

    const mapProducts = (product) => {
        return {
            productSlug : product.product.slug,
            quantity : product.quantity
        }
    }

    const createOrder = () => {
        let url = "/api/v1/orders/create/order/" + localStorage.getItem("currentUser")
        const request = props.products.map(mapProducts)

        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(request),
        })
            .then((res) => res.json())
            .then((result) => console.log(result))
            .catch((err) => console.log(err))
    }

    const orderHandler = () => {
        createOrder();
        clearCart();
        alert("Siparişiniz Oluşturuldu!");
    }

    const calculateTotalPrice = () => {
        let newTotalPrice = 0;
        
        props.products.map(product => {
            const price = product.quantity * product.product.afterDiscount;
            newTotalPrice += price;
        });
        setTotalPrice(newTotalPrice);
    }

    useEffect(() => {
            props.actions.getProducts(localStorage.getItem("currentUser"));
            calculateTotalPrice();
    });

    const removeFromCart = (slug) => {
        let url = "/api/v1/cart/remove"
        fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userId:localStorage.getItem("currentUser"),
                productSlug:slug
            }),
        })
            .then((res) => res.json())
            .then((result) => console.log(result))
            .catch((err) => console.log(err))
    }

    const clearCart = () => {
        let url = "/api/v1/cart/remove/all"
        fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userId:localStorage.getItem("currentUser")
            }),
        })
            .then((res) => res.json())
            .then((result) => console.log(result))
            .catch((err) => console.log(err))
        
    }

    const removeFromCartHandler = (slug) => {
        removeFromCart(slug);
        alert("Ürün sepetinizden başarıyla kaldırıldı!");
    }

    return (
        <div className='cart-section-container'>
            <div className='cart-items-container'>
                {
                    props.products.map(product => (
                        <div className='cart-item'>
                            <div className='cart-item-left'>
                                <img src={product.product.imageUrl} alt='cart-img' height="200px"></img>
                            </div>
                            <div className='cart-item-mid'>
                                <div className='cart-item-mid-header'>
                                    <p className='text-black'>{product.product.name} - {product.quantity}</p>
                                </div>
                                <div className='cart-item-mid-pricing'>
                                    <p className='text-black pricing-text'>
                                        <span className='price-text'>{product.product.price} TL</span><div className='badge bg-sale'>-%{product.product.discountRate}</div>
                                    </p>
                                    <p className='pricing-after-discount'>
                                        {product.product.afterDiscount} TL
                                    </p>
                                </div>
                            </div>
                            <div className='cart-item-right'>
                                <p className='text-quantity'>{product.quantity}</p>
                                <button onClick={() => removeFromCartHandler(product.product.slug)} className='remove-from-cart'>Sepetten Çıkar</button>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='order-complete'>
                <p className='order-text'>Sipariş Toplamı</p>
                <hr></hr>
                <p className='order-totalPrice text-black'>{totalPrice} TL</p>
                <a href='/' className='text-black'>Alışverişe devam et</a>
                <button onClick={() => orderHandler()} className='order-button'>Sipariş Ver!</button>
            </div>
        </div>
    )
}


function mapStateToProps(state) {
    return {
        "products": state.productCartReducer,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        "actions": {
            "getProducts": bindActionCreators(productCartActions.getProducts, dispatch),
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);