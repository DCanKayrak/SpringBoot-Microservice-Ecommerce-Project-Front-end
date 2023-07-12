import React, { Component } from 'react';
import * as categoryActions from '../redux/actions/categoryActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';

class Navbar extends Component {

    componentDidMount() {
        this.props.actions.getCategories();
    }

    logout(){
        localStorage.removeItem("tokenKey");
        localStorage.removeItem("currentUser");
        localStorage.removeItem("userFirstName");
    }

    render() {
        return (
            <div className="container">
                <div className="nav-belt">
                    <div className="nav nav-left">
                        <div className="nav-logo">
                            <a href="/">
                                <img className='logo-img' src={logo} alt="logo" height="25" />
                            </a>
                            <span className='nav-logo-text'>"Alışverişin en keyifli hali!"</span>
                        </div>
                    </div>
                    <div class="nav nav-mid">
                        <div class="nav-mid-item">
                            <input type="text" class="nav-input" placeholder="Ara" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        </div>
                    </div>
                    <div className="nav nav-right">
                        <div className="nav-tools">
                            <div className="nav-tool">
                                {
                                    localStorage.getItem("currentUser") == null ? <Link to="/login">
                                        <span className="icon-profile-male"></span>
                                        <span>Profile</span>
                                    </Link> : <p>{localStorage.getItem("userFirstName")}</p>
                                }
                            </div>
                            <div className="nav-tool">
                                <a href="/">
                                    <span className="icon-heart"></span>
                                    <span>Favorite List</span>
                                </a>
                            </div>
                            <div className="nav-tool">
                                <a href="/cart">
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
                            {
                                this.props.categories.map(category => (
                                    <Link to={"/categories/" + category.slug}><span class="cat-link">{category.name}</span></Link>
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

function mapStateToProps(state) {
    return {
        "categories": state.categoryReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        "actions": {
            "getCategories": bindActionCreators(categoryActions.getCategories, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
