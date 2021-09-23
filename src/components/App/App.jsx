import React from 'react';
import axios from 'axios';
import './App.css';
import { useDispatch } from 'react-redux';

function App() {

  const dispatch = useDispatch();

  // GET pizza list from server
  const fetchPizzaList = () => {
    axios({
      method: 'GET',
      url: '/api/pizza',
    }).then(response => {
      console.log(response.data);
      dispatch({
        type: 'SET_PIZZA_LIST',
        payload: response.data
      });
    })
  }
  
  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
  
      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
  
    </div>
  );
}

export default App;
