import { combineReducers } from "redux";
import singleProductReducer from "./singleProductReducer";
import productsReducer from "./productsReducer";

export default combineReducers({
  singleProduct: singleProductReducer,
  products: productsReducer,
});
