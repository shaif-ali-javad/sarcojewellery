import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter />
    <App />
    <BrowserRouter />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom";

// import "./index.css";

// import Home from "./component/testHome";
// import SupportAdmin from "./component/support-admin";

// const path = window.location.pathname;

// ReactDOM.render(
//   <React.StrictMode>
//     {path.indexOf("/support") === -1 ? <Home /> : <SupportAdmin />}
//   </React.StrictMode>,
//   document.getElementById("root")
// );
