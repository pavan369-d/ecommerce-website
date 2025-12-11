import { combineReducers } from "redux";
import { productData } from "./productReducer";
import { cartData } from "./reducer";


export default combineReducers({
cartData,
productData,



})