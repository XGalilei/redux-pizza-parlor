import { useState } from "react";

function CustomerForm() {   

    //will need to retrieve the customer's order first
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');

    const handleNext = (event) => {
        event.preventDefault();
        //done to prevent code from running automatically

        // TO-DO: Add-in code to handle next step
    }

    return <div>
        <form onSubmit={handleNext}>
            <input 
            onChange={(event) => setName(event.target.value)}
            value={name}
            required
            placeholder="Name" />
            <input
            onChange={(event) => setAddress(event.target.value)}
            value={address}
            required 
            placeholder="Street Adresss" />
            <input 
            onChange={(event) => setCity(event.target.value)}
            value={city}
            required
            placeholder="City"/>
            <input 
            onChange={(event) => setZip(event.target.value)}
            value={zip}
            required
            placeholder="Zip"/>

            <button type="button">Pickup</button>
            <button type="button">Delivery</button>

            <input type="submit" value="Submit"/>
        </form>
    </div>;
}

export default CustomerForm;