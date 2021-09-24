import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

// Redux
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

// Array of pizzas
const pizzaReducer = (state = [], action) => {
    if (action.type === 'SET_PIZZA_LIST' ){
        return [...state, action.payload];
    }
    return state;
}

//Array of orders
const orderReducer = (state = [], action) => {
    if (action.type === 'SET_ORDER_LIST' ){
        return [...state, action.payload];
    }
    return state;
}



// Plop in the reducers you want shared through your store here
const storeInstance = createStore(
    combineReducers({
        pizzaReducer,
        orderReducer,
    })
)

ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>, 
document.getElementById('root'));
