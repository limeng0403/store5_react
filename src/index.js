import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import MyRouter from "./MyRouter";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<MyRouter />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
