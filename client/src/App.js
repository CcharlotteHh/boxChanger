import React, { useState } from 'react';
import ColorfulBox from './ColorfulBox';
import ButtonPanelTab from './ButtonPanelTab';
import './App.css';

function App() {
  const [boxColor, setBoxColor] = useState('red');
  const [boxText, setBoxText] = useState('Hello World!');
  const [boxImg, setBoxImg] = useState('Hello World!');
  const [showPanel, setShowPanel] = useState(false);

  function handleColorChange() {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
    const newColor = colors[Math.floor(Math.random() * colors.length)];
    setBoxColor(newColor);
  }

  function handleTextChange(newText) {
    setBoxText(newText);
  }

  function togglePanel() {
    setShowPanel(!showPanel);
  }

  return (
    <div className='App'>
      <ColorfulBox color={boxColor} text={boxText}  />
      <button onClick={togglePanel}>Open Panel</button>
      {showPanel && <ButtonPanelTab className="panel" onColorChange={handleColorChange} onTextChange={handleTextChange} />}
    </div>
  );
}

export default App;
