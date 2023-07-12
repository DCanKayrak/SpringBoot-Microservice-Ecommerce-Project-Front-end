import React, { Component } from 'react';
import * as productActions from '../redux/actions/productActions';
import * as categoryActions from '../redux/actions/categoryActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';



class CategoriesSection extends Component {
    componentDidMount() {
        this.props.actions.getProducts();
        this.props.actions.getCategories();
    }

    render() {
        return (
            <div>
                <div class="categories-section-container">
                    {
                        this.props.categories.map(category => (
                            <div className='category-container'>
                                <div className='category-title'>
                                    <div className='category-title-left'>
                                        <h3 className='text-black'>{category.name}</h3>
                                    </div>
                                    <div className='category-title-right'>
                                        <a href={category.slug}><span className='text-black'>Kategoriye git!</span></a>
                                    </div>

                                </div>
                                <hr></hr>
                                <div className='category-products-container'>
                                    <Swiper
                                        spaceBetween={1}
                                        slidesPerView={4}
                                        onSlideChange={() => console.log('slide change')}
                                        onSwiper={(swiper) => console.log(swiper)}
                                    >
                                        {
                                            category.products.map(product => (
                                                <SwiperSlide className='category-product-slide'>
                                                    <a href={'/product/'+product.slug}>
                                                    <div className='product-slide-cart-container'>
                                                        <div className='product-slide-image-container'>
                                                            <img className='card-img' src={product.imageUrl}></img>
                                                        </div>
                                                        <div className='product-details'>
                                                            <p className='text-black'>{product.name}</p>
                                                            <p className='text-black'><span className='old-price'>{product.price} TL</span></p>
                                                            <p className='text-black after-discount'>{product.afterDiscount} TL</p>
                                                            <button className='button-add-to-cart'>Sepete Ekle!</button>
                                                        </div>
                                                    </div>
                                                    </a>
                                                </SwiperSlide>
                                            ))
                                        }
                                    </Swiper>
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
        "products": state.productReducer,
        "categories": state.categoryReducer,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        "actions": {
            "getProducts": bindActionCreators(productActions.getProducts, dispatch),
            "getCategories": bindActionCreators(categoryActions.getCategories, dispatch),
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesSection);
