import React from 'react';
import ButtonPanel from './ButtonPanel';

function ButtonPanelTab({ onColorChange, onTextChange, onDarkModeChange }) {
  return (
    <div className="tab">
      <ButtonPanel onColorChange={onColorChange} onTextChange={onTextChange} onDarkModeChange={onDarkModeChange}/>
    </div>
  );
}

export default ButtonPanelTab;
