import React from 'react';
import axios from 'axios';
import './App.css';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
      <p>Step 1: Select Your Pizza</p>
      <div className="pizza-card">
        <img className="pizza-image"></img>
        <div className="pizza-description"></div>
        <button>Add</button>
      </div>
      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
  
    </div>
  );
}

export default App;
