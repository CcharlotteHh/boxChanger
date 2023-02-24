import React, { useState } from 'react';
import ColorfulBox from './ColorfulBox';
import ButtonPanelTab from './ButtonPanelTab';

import { Route, Routes } from "react-router-dom"
import './App.css';

function Home() {
  const [boxColor, setBoxColor] = useState('red');
  const [boxText, setBoxText] = useState('Hello World!');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [boxImg, setBoxImg] = useState('Hello World!');
  const [showPanel, setShowPanel] = useState(false);

  function handleColorChange() {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
    const newColor = colors[Math.floor(Math.random() * colors.length)];
    setBoxColor(newColor);
  }

  const handleModeChange = () => {
    console.log("test")
    setIsDarkMode(!isDarkMode);
  };

  function handleTextChange(newText) {
    setBoxText(newText);
  }

  function togglePanel() {
    setShowPanel(!showPanel);
  }

  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
    
      <ColorfulBox color={boxColor} text={boxText}  />
      <button onClick={togglePanel}>Open Panel</button>
      {showPanel && <ButtonPanelTab className="panel" onColorChange={handleColorChange} onTextChange={handleTextChange} onDarkModeChange={handleModeChange}/>}
   
    </div>
  );
}

export default Home;
