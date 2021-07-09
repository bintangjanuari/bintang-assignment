import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import styles from "../../Assets/Styles/LandingPage/home.module.scss";
import CardProduct from "../../Components/Atoms/CardProduct";
import Layout from "../../Components/Molecules/Layout";
import allService from "../../Config/Redux/Services";

const HomePage = () => {
  const dispatch = useDispatch();
  const { getProduct } = allService.productService;
  const { product } = useSelector((state) => state);
  const { products } = product;

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  return (
    <Layout>
      <h1 className={`text-center ${styles.marginTop}`}>New Releases</h1>

      <div className="row">
        {products &&
          products.length > 0 &&
          products.map((item, i) => (
            <div key={i} className="col-lg-3 col-md-3 col-sm-6 col-6">
              <CardProduct num={i + 1} {...item} />
            </div>
          ))}
      </div>
    </Layout>
  );
};

export default withRouter(HomePage);
