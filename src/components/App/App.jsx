import React, { useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import CustomerForm from '../CustomerForm/CustomerForm';
import {useDispatch} from 'react-redux';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    fetchPizzaList();
    fetchOrderList();
  },[]);

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

  // GET order list from server
  const fetchOrderList =() =>{
    axios({
      method: 'GET',
      url: '/api/order',
    }).then(response => {
      console.log('orders GET',response.data);
      dispatch({
        type: 'SET_ORDER_LIST',
        payload: response.data
      })
    }).catch (error => {
      console.log('error on ORDERS GET', error);
    });
  }
  
  // Order Admin


  // Order Display all pizzas


  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
      
      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
      <CustomerForm />
    </div>
  );
}

export default App;
