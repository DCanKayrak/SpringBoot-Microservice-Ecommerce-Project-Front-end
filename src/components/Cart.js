import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as productCartActions from '../redux/actions/productCartActions';


class Cart extends Component {




    componentDidMount() {
        this.props.actions.getProducts(localStorage.getItem("currentUser"));
    }


    render() {


        return (
            <div>
                <div className='cart-items-container'>
                    {
                        this.props.products.map(product => (
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
                                    <button onClick={() => this.removeFromCartHandler(product.product.slug)} className='remove-from-cart'>Sepetten Çıkar</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
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