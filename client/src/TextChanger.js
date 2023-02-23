import React, { useState } from 'react';

function TextChanger({ onTextChange }) {
  const [text, setText] = useState('');

  function handleChange(e) {
    setText(e.target.value);
  }

  function handleClick() {
    onTextChange(text);
    setText('');
  }

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      <button onClick={handleClick}>Change Text</button>
    </div>
  );
}

export default TextChanger;
