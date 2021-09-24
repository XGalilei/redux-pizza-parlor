import React, { useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import { useDispatch } from 'react-redux';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import Admin from '../Admin/Admin.jsx';
import CustomerForm from '../CustomerForm/CustomerForm';
import PizzaList from '../PizzaList/PizzaList';

function App() {


  // Russell's spaghetti Order checkout
  // const getCheckout = () => {
  //   axios({
  //     method: 'GET',
  //     url: '/api/pizza',
  //   }).then((response) => {
  //     dispatch({
  //       type: 'CHECKOUT_DATA',
  //       payload: response.data,
  //     }).catch((err) => {
  //       console.log(err);
  //       alert('Something went wrong.');
  //     })
  //   })
  // }

  // // Russell's spaghetti POST for checkout
  // const postCheckout = () => {
  //   axios({
  //     method: 'POST',
  //     url: '/api/order',
  //   }).then(response => {
  //     console.log(response.data);
  //     dispatch({
  //       type: 'CHECKOUT',
  //       payload: response.data,
  //     });
  //   })
  // }

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
    }).catch (error => {
      console.log('error on PIZZA GET', error);
    });
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
      
      <Router>
        <Route path="/admin">
          <Admin />
        </Route>
        <Link to="api/pizza"><button>Order a Pizza!</button></Link>
        <Route path="/api/pizza">
          <PizzaList fetchPizzaList={fetchPizzaList}/>
        </Route>
        <Link to="/api/checkout"></Link>
        <Route path="/api/order">
          <CustomerForm />
        </Route>
      </Router>
    </div>
  );
}

export default App;
