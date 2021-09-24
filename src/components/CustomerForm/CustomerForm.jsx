import { useState } from "react";
import { useSelector } from 'react-redux';
//import {useHistory} from 'react-router-dom';

function CustomerForm() {

    const reduxStore = useSelector(store => store);

    //will need to retrieve the customer's order first
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');
    //const [type, setType] = useState('');

    const moveObject = (object) => {
        const action = {
            type: 'MOVE_OBJECT_UP',
            payload: object
        }
    };

    const handleNext = (event) => {
        event.preventDefault();
        //done to prevent code from running automatically

        // TO-DO: Add-in code to handle next step
        // will need to add to the existing order object, 
        const orderObject = {
            customer_name: name,
            street_address: address,
            city: city,
            zip: zip,
            type: 'delivery'
            //type: type 
            // (still unsure how to set this up)
        };
        console.log(orderObject);
        //history.push()
    }

    return <div>
        <form onSubmit={handleNext}>
            <div>
                <input
                    onChange={(event) => setName(event.target.value)}
                    value={name}
                    required
                    placeholder="Name" /> <br />
                <input
                    onChange={(event) => setAddress(event.target.value)}
                    value={address}
                    required
                    placeholder="Street Adresss" /> <br />
                <input
                    onChange={(event) => setCity(event.target.value)}
                    value={city}
                    required
                    placeholder="City" /> <br />
                <input
                    onChange={(event) => setZip(event.target.value)}
                    value={zip}
                    required
                    placeholder="Zip" /> <br />
            </div>

            <div>
                <input type="radio" id="pickup" name="type" value="pickup" />
                <label htmlFor="pickup">Pickup</label>
                <input type="radio" id="delivery" name="type" value="delivery" />
                <label htmlFor="delivery">Delivery</label>
            </div>

            <input type="submit" value="Next" />
        </form>
    </div>;
}

export default CustomerForm;