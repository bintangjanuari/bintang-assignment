import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import Layout from "../../Components/Molecules/Layout";
import allService from "../../Config/Redux/Services";
import { compareColor, getProductImage } from "../../Utils/Helper";
import styles from "../../Assets/Styles/LandingPage/product-detail.module.scss";
import ReactImageGallery from "react-image-gallery";
import assets from "../../Assets";
import "react-image-gallery/styles/scss/image-gallery.scss";
import allActions from "../../Config/Redux/Actions";

const ProductDetail = (props) => {
  const dispatch = useDispatch();
  const { addToCart } = allActions.productAction;
  const { product } = useSelector((state) => state);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const { products, carts } = product;
  const { params } = props.match;
  const item = products[params.id - 1];

  const images = [
    {
      original: getProductImage(parseInt(params.id)),
      thumbnail: getProductImage(parseInt(params.id)),
    },
    {
      original: getProductImage(2),
      thumbnail: getProductImage(2),
    },
    {
      original: getProductImage(3),
      thumbnail: getProductImage(3),
    },
  ];

  const handleAddToCart = (prevCart) => {
    const newData = {
      _id: params.id,
      name: item.name,
      size: selectedSize,
      color: selectedColor,
      image: getProductImage(parseInt(params.id)),
      qty: 1,
      price: item.price,
      total: item.price,
    };

    let checkCart = prevCart.filter((val) => val._id == params.id);

    let oldCarts = prevCart.filter((val) => val._id !== params.id);

    if (checkCart.length > 0) {
      const newCart = {
        ...checkCart[0],
        qty: checkCart[0].qty + 1,
        size: selectedSize,
        color: selectedColor,
        total: item.price * checkCart[0].qty,
      };
      dispatch(addToCart([...oldCarts, newCart]));
    } else {
      dispatch(addToCart([...oldCarts, newData]));
    }
  };

  console.log(carts);

  return (
    <Layout>
      <div className="row mt-4">
        <div className="col-lg-6 col-md-6 col-sm-12 col-12 mb-4">
          <ReactImageGallery
            items={images}
            showNav={false}
            showPlayButton={false}
            showFullscreenButton={false}
          />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-12 mt-2">
          <p className={`mb-0 text-uppercase ${styles.textCategory}`}>
            {item.category}
          </p>
          <h1 className={`mb-0 text-uppercase text-bold ${styles.textProduct}`}>
            {item.name}
          </h1>
          <p className={`mb-0 ${styles.textDescription}`}>{item.description}</p>

          <div className="d-flex align-items-center mt-2">
            <img src={assets.Play} className="mr-2" />
            <p className={`mb-0 ${styles.textDescription}`}>PLAY VIDEO</p>
          </div>

          {item?.sizes && item.sizes.length > 0 && (
            <div className="mt-3">
              <p className={` text-uppercase text-bold ${styles.textProduct}`}>
                Select Size(US) {selectedSize}
              </p>
              <div className="row w-60">
                {item.sizes.map((val, index) => (
                  <div className="col-2 mr-2 mb-3">
                    <button
                      key={index}
                      onClick={() => setSelectedSize(val)}
                      style={{ width: 60 }}
                      className={`btn btn-${
                        selectedSize == val ? "dark" : "default"
                      } mr-2 border`}
                    >
                      {val}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {item?.colors && item.colors.length > 0 && (
            <div className="mt-3 mb-4">
              <p className={` text-uppercase text-bold ${styles.textProduct}`}>
                Select Color {selectedColor && selectedColor.name}
              </p>
              <div className="d-flex align-items-center justify-content-start">
                {item.colors.map((row, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedColor(row)}
                    className={`btn btn-default mr-2 ${styles.color} ${
                      compareColor(selectedColor?.name, row.name)
                        ? styles.selectedColor
                        : null
                    }`}
                    style={{ backgroundColor: row.color_hash }}
                  />
                ))}
              </div>

              <div className="d-flex align-items-center d-block d-sm-block d-md-none d-lg-none mt-4">
                <img src={assets.FreeDelivery} />
                <p className="mb-0 ml-2">free shipping over $100 purchase</p>
              </div>
            </div>
          )}
        </div>
        <div className={`col-md-12 ${styles.cardFooter}`}>
          <div className="d-flex align-items-center ">
            <img src={assets.FreeDelivery} />
            <p className="mb-0 ml-2  d-md-block d-lg-block d-none d-sm-none ">
              free shipping over $100 purchase
            </p>
          </div>
          <button
            disabled={!selectedSize || !selectedColor}
            onClick={() => handleAddToCart(carts)}
            className="btn btn-dark text-uppercase text-bold align-items-center"
          >
            add to bag — ${item.price}{" "}
            <img src={assets.ArrowRight} className="mb-1" />
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default withRouter(ProductDetail);
