import React, { useState } from 'react';
import ColorfulBox from './ColorfulBox';
import ButtonPanelTab from './ButtonPanelTab';
import Home from './Home';

import { Route, Routes } from "react-router-dom"
import './App.css';
import Panel from './Panel.';

function App() {
 

  return (
    <div className='App'>
      {/* <Link target={"_blank"} to="your-link">Your Link</Link> */}
       <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/panel" element={<Panel />} />
      </Routes>
    </div>
  );
}

export default App;
