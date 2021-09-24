import React from 'react';
import axios from 'axios';
import './App.css';

function App() {

  // Order checkout
  const getCheckout = () => {
    axios({
      method: 'GET',
      url: '/api/pizza',
    }).then((response) => {
      dispatch({
        type: 'SET_CHECKOUT',
        payload: response.data,
      }).catch((err) => {
        console.log(err);
        alert('Something went wrong.');
      })
    })
  }

  const postCheckout = () => {
    axios({
      method: 'POST',
      url: '/api/order',
    }).then(response => {
      console.log(response.data);
      dispatch({
        type: 'CHECKOUT',
        payload: response.data,
      });
    })
  }

  // Order Enter Customer Info


  // Order Select Pizza

  
  // Order Admin


  // Order Display all pizzas


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
