import React from 'react';
import ColorChanger from './ColorChanger';
import TextChanger from './TextChanger';
import ImgChanger from './ImgChanger';

function ButtonPanel({ onColorChange, onTextChange, onImgChange }) {
  return (
    <div>
      <ColorChanger onColorChange={onColorChange} />
      <TextChanger onTextChange={onTextChange} />
      <ImgChanger  onImgChange={onImgChange} />
    </div>
  );
}

export default ButtonPanel;
