import React, { useState } from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Patient from "./components/Patient";
import Resource from "./components/Resource";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
 
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/patients" element={<Patient />} />
        <Route path="/resources" element={<Resource />} />
      </Routes>
    </div>
  );
}

export default App;
