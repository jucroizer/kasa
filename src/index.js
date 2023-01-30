import React from "react";
import ReactDOM from "react-dom";
import RouteManager from "./route/route";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouteManager />
  </React.StrictMode>,
  document.getElementById("root")
);

