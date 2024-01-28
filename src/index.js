import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import ThemeContextProvider from "./context/ThemeContext.js";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeContextProvider>
    <App></App>
  </ThemeContextProvider>
);
