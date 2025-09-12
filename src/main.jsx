import React from "react";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

const isVercel = import.meta.env.VERCEL === "1";

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter basename={isVercel ? "/" : "/Personal-Portfolio/"}>
    <App />
  </BrowserRouter>
);
