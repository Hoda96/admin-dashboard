import React from "react";
import Dashboard from "../container/Dashboard/Dashboard.jsx";
import Content from "../container/Content/Content.jsx";
import Customization from "../container/Customization/Customization.jsx"
import Analytics from "../container/Analytics/Analytics.jsx";
import { Routes, Route } from "react-router-dom";


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/content" element={<Content />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/customization" element={<Customization />} />
    </Routes>
  );
}

export default AppRoutes;