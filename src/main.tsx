import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App";  // <-- FIXED path to your real app

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
