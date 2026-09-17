import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import { CRMProvider } from "./context/CRMContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <CRMProvider>
          <App />
        </CRMProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
