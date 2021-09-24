import React from 'react';
import { useSelector, useDispatch, useStore } from 'react-redux';

function CheckoutPage() {
    // So orderInfo will be Ian's reducer
    const orderInfo=useSelector(store => store.orderReducer);
    const pizzaInfo=useSelector(store => store.pizzaReducer);

    const dispatch = useDispatch();

    const handleCheckout = () => {
        const action = { 
            type: 'CHECKOUT'
        };
        dispatch(action);
    }

    return (
        <>
            <h1>Prime Pizza</h1>
            <br />
            <h2>Step 3: Checkout</h2>
            <>
            {/* <h2>{JSON.stringify(orderInfo)}</h2> */}
            <div>{orderInfo.map(currentCustomer => (
                <ul>
                    <li>{currentCustomer.customer_name}</li>
                    <li>{currentCustomer.street_address}</li>
                    <li>{currentCustomer.city}</li>
                </ul>
                ))}
            </div>
            </>
            <h3>For Delivery</h3>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Cost</th>
                    </tr>
                </table>
                {/* <h2>{JSON.stringify(pizzaInfo)}</h2> */}
                <table>
                <tbody>
                    {pizzaInfo.map(pizza => (
                    <tr>
                        <td>{pizza.type}</td>
                        <td>{pizza.cost}</td>
                    </tr>
                ))} </tbody>
                </table>
                <br />
                <h2>Total: {orderInfo.total}</h2>
                <br />
                <button onClick={handleCheckout}>Checkout</button>
        </>
    );
}

export default CheckoutPage;