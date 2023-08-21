// importing teh components
import React from "react";
import ReactDOM from "react-dom";
// Importing the main component of the app
import App from "./App";
import { Provider } from "react-redux";
// Importing the Redux store
import store from "./redux/store";

// Rendering the main component of the app inside the Redux Provider
ReactDOM.render(
  <Provider store={store}>
    {/* The main component of the app */}
    <App />
  </Provider>,
  // Mounting the app inside the HTML element with the ID "root"
  document.getElementById("root")
);
