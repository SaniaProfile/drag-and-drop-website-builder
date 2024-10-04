// src/components/Canvas.js
import React, { useState } from "react";
import "./Canvas.css";

const Canvas = ({ elements }) => {
  const [canvasElements, setCanvasElements] = useState([]);

  const handleDrop = (e) => {
    e.preventDefault();
    const type = e.dataTransfer.getData("text");
    const newElement = { type, id: Date.now() };
    setCanvasElements([...canvasElements, newElement]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="canvas" onDrop={handleDrop} onDragOver={handleDragOver}>
      {canvasElements.map((element) => {
        return (
          <div key={element.id} className={`element ${element.type}`}>
            {element.type}
          </div>
        );
      })}
    </div>
  );
};

export default Canvas;
