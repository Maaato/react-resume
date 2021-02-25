import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

import "./App.css";

import { Resume } from "./Pages/Resume";

ReactDOM.render(
  <React.StrictMode>
    <Resume />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
