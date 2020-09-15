import { SET_PRODUCTS } from "../actions/actionTypes";

const initialState = {
  products: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.products,
      };
    default:
      return state;
  }
};
