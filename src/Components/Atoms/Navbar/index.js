import React from "react";
import { Link } from "react-router-dom";
import assets from "../../../Assets";
import styles from "../../../Assets/Styles/LandingPage/navbar.module.scss";

const Navbar = ({ cartCount }) => {
  return (
    <div className="mb-2">
      <nav className="navbar navbar-expand-lg ">
        <Link className={`navbar-brand mr-5 ${styles.navTitle}`} href="#">
          <img src={assets.Logo} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mx-auto text-center text-lg-left">
            <li className="nav-item">
              <Link
                className={`${styles.navLink} ${styles.navLinkActive}`}
                to="/"
              >
                New Release
              </Link>
            </li>
            <li className="nav-item">
              <a className={`${styles.navLink}`} href="#">
                Men
              </a>
            </li>
            <li className="nav-item">
              <a className={`${styles.navLink}`} href="#">
                Women
              </a>
            </li>
            <li className="nav-item">
              <a className={`${styles.navLink}`} href="#">
                Kids
              </a>
            </li>
            <li className="nav-item">
              <a className={`${styles.navLink}`} href="#">
                Customize
              </a>
            </li>
          </ul>
          <div className="d-flex justify-content-between">
            <Link to="/cart" className="mr-3">
              <div>
                <img src={assets.ShoppingBag} />
                {cartCount > 0 && (
                  <span className={`badge badge-danger ${styles.badge}`}>
                    {cartCount}
                  </span>
                )}
              </div>
            </Link>
            <Link to="#" className="ml-3">
              <img src={assets.UserProfile} />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
