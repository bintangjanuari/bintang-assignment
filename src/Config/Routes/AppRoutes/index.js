import React from "react";
import { Route, Switch } from "react-router-dom";
import Cart from "../../../Pages/Cart";
import HomePage from "../../../Pages/Home";
import ProductDetail from "../../../Pages/ProductDetail";
const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/product-detail/:id/:name">
        <ProductDetail />
      </Route>
      <Route path="/cart">
        <Cart />
      </Route>
    </Switch>
  );
};

export default AppRoutes;
