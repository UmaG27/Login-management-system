// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

function ErrorBoundary({ children }) {
  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
