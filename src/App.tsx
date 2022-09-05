import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useToggle } from './useToggle';

const App = () => {
  const {toggle, toggler} = useToggle();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={toggler}>{toggle ? 'Toggled' : 'Click to Toggle'}</button>
      </header>
    </div>
  );
}

export default App;
