import React from 'react';

function ColorChanger({ onColorChange }) {
  return (
    <button onClick={onColorChange}>Change Color</button>
  );
}

export default ColorChanger;
