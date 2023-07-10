import { combineReducers } from "redux";
import productReducer from "./productReducer";
import categoryReducer from "./categoryReducer";

const rootReducers = combineReducers({
    productReducer,
    categoryReducer
});

export default rootReducers;