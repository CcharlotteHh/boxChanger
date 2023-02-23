import React from 'react';
import ButtonPanel from './ButtonPanel';

function ButtonPanelTab({ onColorChange, onTextChange }) {
  return (
    <div className="tab">
      <ButtonPanel onColorChange={onColorChange} onTextChange={onTextChange} />
    </div>
  );
}

export default ButtonPanelTab;
