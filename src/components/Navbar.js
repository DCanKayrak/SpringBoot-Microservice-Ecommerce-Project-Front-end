import React, { Component } from 'react';
import * as categoryActions from '../redux/actions/categoryActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Navbar extends Component {

  componentDidMount(){
    this.props.actions.getCategories();
  }

  render() {
    return (
      <div className="container">
      <div className="nav-belt">
            <div className="nav nav-left">
                <div className="nav-logo">
                    <a href="/">
                        <img src="../assets/images/logo.png" alt="logo" height="25"/>
                    </a>
                </div>
            </div>
            <div class="nav nav-mid">
                <div class="nav-mid-item">
                    <input type="text" class="nav-input" placeholder="Ara" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                </div>
            </div>
            <div className="nav nav-right">
                <div className="nav-tools">
                    <div className="nav-tool">
                        <a href="/">
                            <span className="icon-profile-male"></span>
                            <span>Profile</span>
                        </a>
                    </div>
                    <div className="nav-tool">
                        <a href="/">
                            <span className="icon-heart"></span>
                            <span>Favorite List</span>
                        </a>
                    </div>
                    <div className="nav-tool">
                        <a href="/">
                            <span className="icon-basket"></span>
                            <span>Cart</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="cat-belt">
            <div class="cat-left">
                <div class="cat-links">
                    <a href="cat-link"><span class="cat-link">Ev Eşyası</span></a>
                    {
                      this.props.categories.map( category => (
                        <a href={category.slug}><span class="cat-link">{category.name}</span></a>
                      ))
                    }
                </div>
            </div>

            <div class="cat-right">
                <div class="social-medias">
                    <a href="social-media-link"><span class="icon-twitter"></span></a>
                    <a href="social-media-link"><span class="icon-facebook"></span></a>
                    <a href="social-media-link"><span class="icon-linkedin"></span></a>
                </div>
            </div>
        </div>
        </div>


    )
  }
}

function mapStateToProps(state){
  return {
      "categories":state.categoryReducer
  }
}

function mapDispatchToProps(dispatch){
  return {
      "actions":{
          "getCategories":bindActionCreators(categoryActions.getCategories,dispatch)
      }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Navbar);
