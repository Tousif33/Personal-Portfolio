import React from "react"
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"
import {Routes, Route } from 'react-router-dom';
import "./index.css"
import App from './App.jsx';

const basename = process.env.VERCEL ? '' : '/Personal-Portfolio/';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);