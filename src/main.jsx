import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Analytics } from "@vercel/analytics/react";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
      <Analytics />
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
