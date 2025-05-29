import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./Css/index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/Tp-citas-USACH/">
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>
);
