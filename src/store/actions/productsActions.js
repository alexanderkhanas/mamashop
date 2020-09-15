import { getToken } from "../../utils/utils";
import { fetchProducts } from "../api/api";
import { SET_PRODUCTS } from "./actionTypes";

export const getProductsAction = () => {
  return async (dispatch) => {
    const token = getToken();
    const response = await fetchProducts(token);
    if (response.status === 200) {
      dispatch({ type: SET_PRODUCTS, orders: response.data });
    }
    return response.status === 200;
  };
};