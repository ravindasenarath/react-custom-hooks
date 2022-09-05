import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useToggle } from './useToggle';

const App = () => {
  const [toggled, setToggled] = useState(false);

  const handleOnClick = () => {
    setToggled(toggled => !toggled);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={handleOnClick}>{toggled ? 'Toggled' : 'Click to Toggle'}</button>
      </header>
    </div>
  );
}

export default App;
