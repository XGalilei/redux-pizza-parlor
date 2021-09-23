import { useSelector, useDispatch, useStore } from 'react-redux';

function OrderPage() {
    const reduxStore=useSelector(store => store);
    const {getCheckout} = reduxStore

    const dispatch = useDispatch();

    const handleCheckout = () => {
        const action = { type: 'CHECKOUT' };
        dispatch(action);
    }

    return (
        <>
            <h1>Prime Pizza</h1>
            <br />
            <h2>Step 3: Checkout</h2>
            <>
            <div>{getCheckout.map(customer => (
                <ul>
                    <li>customer.customer_name</li>
                    <li>customer.street_address</li>
                    <li>customer.city</li>
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
                <table>{getCheckout.map(pizza => (
                    <tr>
                        <td>pizza.type</td>
                        <td>pizza.cost</td>
                    </tr>
                ))}
                </table>
                <br />
                <h2>Total: {getCheckout.orders.total}</h2>
                <br />
                <button onClick={handleCheckout}>Checkout</button>
        </>
    );
}

export default CheckoutPage;