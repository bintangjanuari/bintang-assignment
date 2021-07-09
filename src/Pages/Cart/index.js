import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import Layout from "../../Components/Molecules/Layout";
import allService from "../../Config/Redux/Services";
import {
  compareColor,
  deletCart,
  getProductImage,
  getTotal,
} from "../../Utils/Helper";
import styles from "../../Assets/Styles/LandingPage/product-detail.module.scss";
import ReactImageGallery from "react-image-gallery";
import assets from "../../Assets";
import "react-image-gallery/styles/scss/image-gallery.scss";
import allActions from "../../Config/Redux/Actions";

const Cart = (props) => {
  const dispatch = useDispatch();
  const { addToCart } = allActions.productAction;
  const { product } = useSelector((state) => state);
  const { carts } = product;

  const removeCart = (id) => {
    const newCart = deletCart(carts, id);
    dispatch(addToCart(newCart));
  };
  return (
    <Layout>
      <h1 className={`text-center ${styles.marginTop}`}>Your Bag</h1>
      <div className=" mt-4">
        <table width="100%">
          <thead>
            <tr>
              <td width="2%"></td>
              <td width="5%"></td>
              <td width="20%" className="text-uppercase">
                product
              </td>
              <td width="5%" className="text-uppercase">
                price
              </td>
              <td width="3%" className="text-uppercase">
                qty
              </td>
              <td width="5%" className="text-uppercase">
                total
              </td>
            </tr>
          </thead>
          <tbody>
            {carts &&
              carts.length > 0 &&
              carts.map((item, index) => (
                <tr key={index}>
                  <td width="2%">
                    <img
                      src={assets.Remove}
                      className="cursor-pointer"
                      onClick={() => removeCart(item._id)}
                    />
                  </td>
                  <td width="5%">
                    <img src={item.image} style={{ width: 60 }} />
                  </td>
                  <td width="20%" className="text-uppercase text-bold">
                    <span style={{ fontWeight: "700" }}>{item.name}</span>{" "}
                    <br />
                    <div className="d-flex align-items-center">
                      <small className="mr-2">SIZE:{item.size}</small>
                      <small className="d-flex align-items-center">
                        COLOR:
                        <RenderColor color={item.color.color_hash} />
                      </small>
                    </div>
                  </td>
                  <td width="5%" className="text-uppercase">
                    {item.price}
                  </td>
                  <td width="3%" className="text-uppercase">
                    {item.qty}
                  </td>
                  <td width="5%" className="text-uppercase">
                    {item.total}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <div className="float-right mt-4" style={{ width: "25%" }}>
          <div
            className="d-flex align-item-center justify-content-between p-2 mb-2"
            style={{ backgroundColor: "#F6F6F6", borderRadius: 5 }}
          >
            <p className="mb-0">TOTAL</p>
            <p className="mb-0">${getTotal(carts)}</p>
          </div>
          <div
            className="d-flex align-item-center justify-content-between p-2 mt-2"
            style={{ backgroundColor: "#000000", borderRadius: 5 }}
          >
            <p className="mb-0 text-white">PAY NOW</p>
            <p className="mb-0">
              <img src={assets.ArrowRight} />
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

const RenderColor = ({ color }) => {
  return (
    <div
      style={{ width: 15, height: 15, borderRadius: 5, backgroundColor: color }}
    />
  );
};

export default withRouter(Cart);
