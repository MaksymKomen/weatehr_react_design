import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "../src/components/App/App";
import { CityProvider } from "./Context/CityContext";
import "./styles/main.scss";

ReactDOM.render(
  <React.StrictMode>
    <CityProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CityProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
