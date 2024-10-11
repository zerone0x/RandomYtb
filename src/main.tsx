import React from "react";
import ReactDOM from "react-dom/client"; // Note the change here
import { HelmetProvider } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
import App from "./App";
import { Analytics } from "@vercel/analytics/react";
import { store } from "./store/store";
import { Provider } from "react-redux";

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <HelmetProvider>
          <ToastContainer />
          <App />
          <Analytics />
        </HelmetProvider>
      </Provider>
    </React.StrictMode>,
  );
}
