import { ADD_TO_CART, SET_PRODUCT, UPDATE_QTY } from "../../Constant";

const INITIAL_STATE = {
  products: [],
  carts: [],
};

const ProductReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case SET_PRODUCT:
      return {
        ...state,
        products: payload,
      };
    case ADD_TO_CART:
      return {
        ...state,
        carts: payload,
      };
    case UPDATE_QTY:
      return {
        ...state,
        carts: [...state.carts, payload],
      };

    default:
      return {
        ...state,
      };
  }
};

export default ProductReducer;
