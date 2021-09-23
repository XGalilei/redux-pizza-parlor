import {useSelector} from 'react-redux'

function Admin() {
    const reduxStore=useSelector(store => store);
    const {bigThing} = reduxStore
    return (
        <>
        <h1>Prime Pizza Orders</h1>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Time Order Placed</th>
                    <th>Type</th>
                    <th>Cost</th>
                </tr>
            </table>
            <table>{bigThing.map(smallThing => (
                <tr>
                    <td>smallThing.customer_name</td>
                    <td>smallThing.time</td>
                    <td>smallthing.type</td>
                    <td>smallThing.total</td>
                </tr>))}
            </table>
        </>
    );
}

export default Admin;