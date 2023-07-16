import React, { Component } from 'react';
import CategoriesSection from './CategoriesSection';
import MainSaleSlider from './MainSaleSlider';
import UpperSlider from './UpperSlider';

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <UpperSlider />
                <MainSaleSlider />
                <CategoriesSection />
            </div>
        )
    }
}
