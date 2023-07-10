import React, { Component } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import * as productActions from '../redux/actions/productActions';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class MainSlider extends Component {
    componentDidMount() {
        this.props.actions.getProducts();
    }

    render() {
        return (
            <div>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={20}
                    slidesPerView={4}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >

                    {
                        this.props.products.map(product => (
                            <SwiperSlide className='slider-slide'>
                                <a href={product.slug}><img className='slider-image' src={product.imageUrl}></img></a>
                                <p className='slider-text'>{product.name}</p>
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
