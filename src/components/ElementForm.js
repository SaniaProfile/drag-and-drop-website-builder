// src/components/ElementForm.js
import React from "react";

const ElementForm = ({ selectedElement }) => {
  if (!selectedElement) return null;

  return (
    <div className="element-form">
      <h3>Edit {selectedElement.type}</h3>
      {/* Add more fields as necessary */}
      <label>
        Element Name:
        <input type="text" placeholder={selectedElement.type} />
      </label>
      <button>Save</button>
    </div>
  );
};

export default ElementForm;
