import React, {Suspense} from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./app";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { BrowserRouter } from "react-router-dom";
import './i18n';

ReactDOM.render(
  <BrowserRouter>
  <Suspense fallback={<div>Loading...</div>}>
     <App />
  </Suspense>  
  </BrowserRouter>,
  document.getElementById("root")
);
