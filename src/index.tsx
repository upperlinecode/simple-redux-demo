// @ts-ignore
import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import theStore from "./redux/store";
import { Provider } from "react-redux";

const rootElement = document.getElementById("root");
// Strict typescript requires that we account for not finding a root before moving on.
if (!rootElement) throw new Error("Failed to find the root element");

const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Provider store={theStore}>
      <App />
    </Provider>
  </React.StrictMode>
);
