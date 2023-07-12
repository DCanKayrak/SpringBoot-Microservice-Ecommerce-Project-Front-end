import { combineReducers } from "redux";
import productReducer from "./productReducer";
import categoryReducer from "./categoryReducer";
import productDetailsReducer from './productDetailsReducer';
import productCartReducer from './productCartReducer';
import addToCartReducer from "./addToCartReducer";

const rootReducers = combineReducers({
    productReducer,
    productDetailsReducer,
    categoryReducer,
    productCartReducer,
    addToCartReducer,
});

export default rootReducers;