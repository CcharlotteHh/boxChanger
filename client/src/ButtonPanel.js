import React from 'react';
import ColorChanger from './ColorChanger';
import TextChanger from './TextChanger';
import ImgChanger from './ImgChanger';
import DarkmodeChanger from './DarkModeChanger';

function ButtonPanel({ onColorChange, onTextChange, onImgChange,onDarkModeChange }) {
  return (
    <div>
      <ColorChanger onColorChange={onColorChange} />
      <TextChanger onTextChange={onTextChange} />
      <ImgChanger  onImgChange={onImgChange} />
      <DarkmodeChanger  onDarkModeChange={onDarkModeChange} />
    </div>
  );
}

export default ButtonPanel;
