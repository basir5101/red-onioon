import React, { useContext } from 'react';
import { orderItem } from '../../App';

const DeliveryForm = () => {
    const [item, setItem] = useContext(orderItem);
    const handleSubmit = (e) =>{
        const newItem = [...item];
        newItem.submit = true;
        setItem(newItem);
        console.log(item)
        e.preventDefault();
    }
    return (
        <div className = 'deliver-form'>
            <h4>Edit Delivery Details</h4>
            <hr/>
            <form>
                <input type="text" value = 'Deliver to door' />
                <input type="text" value = '107 Rd No 8'/>
                <input type="text" placeholder = 'Flat. suite of floor'/>
                <input type="text" placeholder = 'Business Name'/>
                <input type="text" placeholder = 'Add Delivery Instructor' />
                <input onClick = {handleSubmit} type="submit" value="Save & Continue"/>
            </form>
        </div>
    );
};

export default DeliveryForm;