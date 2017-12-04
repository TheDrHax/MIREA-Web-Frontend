import React from "react";
import { Router, Route, browserHistory } from "react-router";
import { createApp, renderApp } from "@phenomic/preset-react-app/lib/client";

import Home from "./modules/Home";
import Doge from "./modules/Doge";

import "./styles.css";

const routes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={Home} />
    <Route path="/doge" component={Doge} />
  </Router>
);

export default createApp(routes);

if (module.hot) {
  module.hot.accept(() => renderApp(routes));
}
