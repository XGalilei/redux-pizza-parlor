import React from 'react';
import { useSelector } from 'react-redux';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import CustomerForm from '../CustomerForm/CustomerForm.jsx'


function PizzaList () {
    const pizzaList = useSelector(store => store.pizzaReducer)

    return (
        <div>
            <p>Step 1: Select Your Pizza</p>
            <div>
                {pizzaList.map((pizza) => 
                <div>
                    <img src={pizza.image_path}></img>
                    <h2>{pizza.name}</h2>
                    <p>{pizza.description}</p>
                    <p>{pizza.price}</p>
                    <button>Add</button>
                    <Router>
                        <Link to="/api/order"><button>Next</button></Link>
                            <Route path="/api/order">
                                {/* <CustomerForm /> */}
                            </Route>
                    </Router>
                </div>
                )}
            </div>
        </div>
    );
}

export default PizzaList;