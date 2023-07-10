import React, { Component } from 'react';
import * as productActions from '../redux/actions/productActions';
import * as categoryActions from '../redux/actions/categoryActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';



class CategoriesSection extends Component {
    componentDidMount(){
        this.props.actions.getProducts();
        this.props.actions.getCategories();
    }

  render() {
    return (
      <div>
        <div class="categories-section-container">
            {
                this.props.products.map(product => (
                    <a href={product.slug}><p>{product.name}</p></a>
                ))
            }
        </div>
      </div>
    )
  }
}


function mapStateToProps(state){
    return {
        "products":state.productReducer,
        "categories":state.categoryReducer,
    }
}

function mapDispatchToProps(dispatch){
    return {
        "actions":{
            "getProducts":bindActionCreators(productActions.getProducts,dispatch),
            "getCategories":bindActionCreators(categoryActions.getCategories,dispatch),
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CategoriesSection);
