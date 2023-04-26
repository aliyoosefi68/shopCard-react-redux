import productReducer from "./products/productReducer";
import cartReducer from "./cart/cartReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  productsState: productReducer,
  cartState: cartReducer,
});

export default rootReducer;
