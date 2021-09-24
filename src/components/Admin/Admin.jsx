import React from 'react';
import axios from 'axios';
import {useSelector} from 'react-redux';
import "./Admin.css";


function Admin() {
    const adminData = useSelector(store => store.orderReducer); //in books
    // const {bigThing} = reduxStore

    return (
        <>
        <h1>Prime Pizza Orders</h1>
        <p>{JSON.stringify(adminData)}</p>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Time Order Placed</th>
                        <th>Type</th>
                        <th>Cost</th>
                    </tr>
                </thead>
                <tbody>
                {adminData.map(smallThing => ( 
                <tr>
                    <td>{smallThing.customer_name}</td>
                    <td>{smallThing.time}</td>
                    <td>{smallThing.type}</td>
                    <td>{smallThing.total}</td>
                </tr>
                ))}</tbody>
            </table>
        </>
    );
}

export default Admin;