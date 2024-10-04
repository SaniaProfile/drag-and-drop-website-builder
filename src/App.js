// src/App.js
import React, { useState } from "react";
import Canvas from "./components/Canvas";
import ElementForm from "./components/ElementForm";
import Sidebar from "./components/Sidebar";
import "./App.css";

function App() {
  const [selectedElement, setSelectedElement] = useState(null);

  return (
    <div className="app">
      <Sidebar />
      <Canvas />
      <ElementForm selectedElement={selectedElement} />
    </div>
  );
}

export default App;
