import React from 'react';
import './App.css'

function ColorfulBox({ color, text,img }) {
  const boxStyle = {
    backgroundColor: color,
    width: '200px',
    height: '200px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div className="colorBox">
    <div   style={boxStyle}>
      <h2>{text}</h2>
      <img src={img} alt='img'></img>
    </div>
    </div>
  );
}

export default ColorfulBox;
