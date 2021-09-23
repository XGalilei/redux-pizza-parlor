import { useState } from "react";

function CustomerForm() {   

    //will need to retrieve the customer's order first
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const []

    const handleNext = () => {

    }

    return <div>
        <form>
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
            onChange={}
            required
            placeholder="City"/>
            <input 
            required
            placeholder="Zip"/>

            <button type="button">Pickup</button>
            <button type="button">Delivery</button>

            <input type="submit" value="Submit"/>
        </form>
    </div>;
}

export default CustomerForm;