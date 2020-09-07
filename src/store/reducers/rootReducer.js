import { combineReducers } from "redux";
import singleProductReducer from "./singleProductReducer";

export default combineReducers({ singleProduct: singleProductReducer });
