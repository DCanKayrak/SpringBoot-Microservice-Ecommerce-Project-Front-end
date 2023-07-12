import React, { Component, useState } from 'react';
import * as categoryActions from '../redux/actions/categoryActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

function Category(props){

  const { slug } = useParams();
  const [products,setProducts] = useState([]);

    function getProducts(slug){
      props.actions.getCategories(slug);
      setProducts(props.actions.getCategories(slug))
    }

    useEffect(() => {
      getProducts(slug);
    });
  
    return (
      <div>
        {
          products
        }
        
      </div>
    )
  }

function mapStateToProps(state) {
  return {
      "category": state.categoryProductReducer,
  }
}

function mapDispatchToProps(dispatch) {
  return {
      "actions": {
          
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Category);
