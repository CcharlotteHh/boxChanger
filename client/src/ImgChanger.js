import React from 'react';

function ImgChanger({ onColorChange }) {
  return (
    <button onClick={onColorChange}>Change img</button>
  );
}

export default ImgChanger;
