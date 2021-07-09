import React from "react";
import { Link } from "react-router-dom";
import assets from "../../../Assets";
import styles from "../../../Assets/Styles/LandingPage/home.module.scss";
import { getProductImage, getSlug } from "../../../Utils/Helper";
const CardProduct = ({ num = 1, name, category }) => {
  return (
    <Link
      to={`/product-detail/${num}/${getSlug(name)}`}
      className={`text-decoration-none text-dark `}
    >
      <div className={`card ${styles.cardContainer} shadow-none border-0`}>
        <div className={`text-center ${styles.imageContainer}`}>
          <img
            src={getProductImage(num)}
            className={`w-100 ${styles.productImage}`}
          />
        </div>
        <div className={`mt-2 p-2 ${styles.textConatiner}`}>
          <p className={`mb-0 ${styles.productTitle}`}>{name}</p>
          <p className={`mb-0 ${styles.productSubTitle}`}>{category}</p>
        </div>
      </div>
    </Link>
  );
};

export default CardProduct;
