import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

// Redux
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';



// Plop in the reducers you want shared through your store here
const storeInstance = createStore(
    combineReducers({
        pizzaReducer,
    })
)

ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>, 
document.getElementById('root'));
