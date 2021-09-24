import React from 'react';
import { useSelector } from 'react-redux';

function PizzaList () {
    const pizzaList = useSelector(store => store.pizzaReducer)
    return (
        <div>
            <p>Step 1: Select Your Pizza</p>
            {pizzaList.map((pizza) => 
            <div className="pizza-card">
                <img className="pizza-image"/>
                <div className="pizza-description"></div>
            </div>
            )}
            <button>Add</button>
        </div>
    );
}

export default PizzaList;