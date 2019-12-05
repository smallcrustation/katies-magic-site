import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import ThemeContextProvider from "./contexts/ThemeContext";

ReactDOM.render(
  <ThemeContextProvider>
    <App />
  </ThemeContextProvider>,
  document.getElementById("root")
);
