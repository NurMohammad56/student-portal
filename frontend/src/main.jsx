import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import "./index.css";
import AdminPanel from "./pages/AdminPanel";
import ResultPage from "./pages/ResultPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
