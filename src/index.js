import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App.js";
import { store } from "./Redux/store";
import { Provider } from "react-redux";
import "tachyons";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
