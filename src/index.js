import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App.js";
import { store } from "./Redux/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import "tachyons";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.register();