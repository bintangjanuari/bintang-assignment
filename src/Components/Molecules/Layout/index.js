import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../../Atoms/Navbar";
const Layout = ({ children }) => {
  const { product } = useSelector((state) => state);
  const { carts } = product;
  return (
    <div className="container">
      <Navbar cartCount={carts.length} />
      {children}
    </div>
  );
};

export default Layout;
