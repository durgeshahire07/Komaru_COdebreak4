import React, { useState } from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import Header from "./components/Header";
import CanvasMenu from "./components/CanvasMenu";
import Dashboard from "./components/Dashboard";
import Patient from "./components/Patient";
import Resource from "./components/Resource";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [toggleCanvas, setToggleCanvas] = useState(true);
  const onCanvasToggle = (isToggle) => {
    setToggleCanvas(isToggle);
    console.log(isToggle);
  };
  return (
    <div className="App">
      <Header onOpenCanvas={onCanvasToggle} />
      <CanvasMenu toggleCanvas={toggleCanvas} closeHandler={onCanvasToggle} />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/patients" element={<Patient />} />
        <Route path="/resources" element={<Resource />} />
      </Routes>
    </div>
  );
}

export default App;
