import { combineReducers } from "redux";
import ProductReducer from "./ProductReducer";

const reducers = combineReducers({
  product: ProductReducer,
});

export default reducers;
