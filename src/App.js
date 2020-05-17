
import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./containers/Layout/Layout";
import BeautyBox from './containers/BeautyBox/BeautyBox';
import Checkout from "./containers/Checkout/Checkout";

export default () => {
  return (
    <div className="App">
      <Layout>
        <BeautyBox />
        <Checkout />
        <Switch>
          <Route path="/" exact>
            <Redirect to="/builder" />
          </Route>
          <Route path="/builder">
            <BeautyBox />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
        </Switch>
      </Layout>
    </div>
  )
};
