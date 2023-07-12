import React, { Component } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import * as productActions from '../redux/actions/productActions';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

class MainSlider extends Component {
    componentDidMount() {
        this.props.actions.getProducts();
    }

    render() {
        return (
            <div>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={5}
                    slidesPerView={10}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >

                    {
                        this.props.products.map(product => (
                            
                            <SwiperSlide>
                                <div className='slider-container'>
                                <a href={"/product/"+product.slug}><img className='slider-image' src={product.imageUrl}></img></a>
                                </div>
                            </SwiperSlide>
                        ))
                    }

                </Swiper>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        "products": state.productReducer,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        "actions": {
            "getProducts": bindActionCreators(productActions.getProducts, dispatch),
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainSlider);
