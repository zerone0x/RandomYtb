import React from "react";
import ReactDOM from "react-dom/client"; // Note the change here
import { HelmetProvider } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
import App from "./App";
import { Analytics } from "@vercel/analytics/react";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <ToastContainer />
      <App />
      <Analytics />
    </HelmetProvider>
  </React.StrictMode>,
);
