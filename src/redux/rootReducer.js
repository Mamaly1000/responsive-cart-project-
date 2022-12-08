import { combineReducers } from "redux";
import ProductReducer from "./products/productsReducer";
import Cartreducer from "./cart/cartReducer";

const rootreducer = combineReducers({
  productState: ProductReducer,
  cartState: Cartreducer,
});

export default rootreducer;
