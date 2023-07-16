import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import sale_1 from '../assets/images/main_slider/sale_1.png';
import sale_2 from '../assets/images/main_slider/sale_2.png';
import sale_3 from '../assets/images/main_slider/sale_3.png';

export default function MainSaleSlider() {
    return (
        <div className='main-slider-container'>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                className='main-slider-swiper'
            >
                <SwiperSlide className='flex'><img src={sale_1} height='500px' className='sale_image'  alt='sale'></img></SwiperSlide>
                <SwiperSlide className='flex'><img src={sale_2} height='500px' className='sale_image'  alt='sale'></img></SwiperSlide>
                <SwiperSlide className='flex'><img src={sale_3} height='500px' className='sale_image' alt='sale'></img></SwiperSlide>
            </Swiper>
        </div>
    )
}
