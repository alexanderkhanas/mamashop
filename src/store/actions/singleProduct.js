import { fetchSingleProduct } from "../api/api";
import { SET_SINGLE_PRODUCT } from "./actionTypes";

export const getProductById = (id) => async (dispatch) => {
  const response = await fetchSingleProduct(id);
  console.log("single response :", response.data);
  dispatch({ type: SET_SINGLE_PRODUCT, product: response.data });
};
