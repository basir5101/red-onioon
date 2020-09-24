import React from 'react';
import DeliveryForm from './DeliveryForm';
import OrderDetails from './OrderDetails';
import css from './PlaceOrder.css'

const PlaceOrder = () => {
    return (
        <div className = 'row justify-content-around mt-4'>
            <div className = 'col-sm-5'>
                <DeliveryForm></DeliveryForm> 
            </div>
            <div className = 'col-sm-5'>
                <OrderDetails></OrderDetails>
            </div>          
        </div>
    );
};

export default PlaceOrder;