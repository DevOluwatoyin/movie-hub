import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import NotFound from "./pages/not-found.jsx";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";

export default function Pages() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/home" element={<App />} />
        {/* the route below automatically routes "/" to "/home" page */}
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Pages />
  </React.StrictMode>
);
