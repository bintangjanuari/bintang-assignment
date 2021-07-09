import { ADD_TO_CART, SET_PRODUCT } from "../../Constant";

const setProduct = (products) => {
  return {
    type: SET_PRODUCT,
    payload: products,
  };
};

const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

export default {
  setProduct,
  addToCart,
};
