// src/components/Sidebar.js
import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  const handleDragStart = (e, type) => {
    e.dataTransfer.setData("text", type);
  };

  return (
    <div className="sidebar">
      <div
        draggable
        onDragStart={(e) => handleDragStart(e, "Text Block")}
        className="sidebar-item"
      >
        Text Block
      </div>
      <div
        draggable
        onDragStart={(e) => handleDragStart(e, "Image Block")}
        className="sidebar-item"
      >
        Image Block
      </div>
      <div
        draggable
        onDragStart={(e) => handleDragStart(e, "Button")}
        className="sidebar-item"
      >
        Button
      </div>
    </div>
  );
};

export default Sidebar;
