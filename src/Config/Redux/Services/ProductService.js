import axios from "axios";
import { API_URL } from "../../Constant";
import allActions from "../Actions";

const { setProduct } = allActions.productAction;
const getProduct = () => async (dispatch) => {
  await axios.get(API_URL).then((res) => {
    const { shoes } = res.data;
    dispatch(setProduct(shoes));
  });
};

export default {
  getProduct,
};
