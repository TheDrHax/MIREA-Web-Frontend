import React from "react";
import { Router, Route, browserHistory } from "react-router";
import { createApp, renderApp } from "@phenomic/preset-react-app/lib/client";

import { Page } from "./modules/Page";

import "./styles.css";

const routes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={Page} />
  </Router>
);

export default createApp(routes);

if (module.hot) {
  module.hot.accept(() => renderApp(routes));
}
