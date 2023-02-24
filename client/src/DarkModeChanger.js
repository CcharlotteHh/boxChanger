import React from 'react';

function DarkmodeChanger({ onDarkModeChange }) {
  return (
    <button onClick={onDarkModeChange}>Toggle Darkmode</button>
  );
}

export default DarkmodeChanger;