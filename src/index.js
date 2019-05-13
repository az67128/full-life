import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "reducers";
import Firebase, { FirebaseContext } from "components/Firebase";
import App from "components/App";

import "./main.css";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <FirebaseContext.Provider value={Firebase}>
        <App />
      </FirebaseContext.Provider>
    </Router>
  </Provider>,
  rootElement
);
