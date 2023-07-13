import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as productCartActions from '../redux/actions/productCartActions';


class Cart extends Component {

    componentDidMount(){
        this.props.actions.getProducts(localStorage.getItem("currentUser"));
    }


    render(){

   
  return (
    <div>
        {
            this.props.products.map( product => (
                <p className='text-black'>{product.product.name} - {product.quantity}</p>
            ))
        }
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