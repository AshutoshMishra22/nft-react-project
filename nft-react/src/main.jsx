import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { TransactionProvider } from "./context/TransactionContext";
import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <TransactionProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </TransactionProvider>
  </Provider>,
  document.getElementById("root")
);
