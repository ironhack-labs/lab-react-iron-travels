import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import TravelList from "./components/TravelList";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
