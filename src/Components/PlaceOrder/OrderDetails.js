import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { orderItem } from '../../App';

const OrderDetails = () => {
    const [item, setItem] = useContext(orderItem);
    const itemPrice = item.reduce((total, menu) => total + menu.price, 0)
    const tax = itemPrice/10;
    const total = tax + itemPrice;
    return (
        <div>
            <p>From <strong>GulShan Plaza Restaura GPR</strong></p>
            <p>Arriving in 20 - 30 min</p>
            <p>107 Rd No 8</p>
            <div className="p-4 bg-light">
            {
                item.map(i =>{ return <div key = {i.id} className = 'order-item row m-2'>
                        <div className = 'col-sm-4'><img src= {i.picture} alt=""/></div>
                        <div className = 'col-sm-7'>
                            <p> {i.name} </p>
                            <h4 className="text-danger"> ${i.price} </h4>
                        </div>
                    </div>
                })
            }
            </div>
            <div>
                <p> Total Item: {item.length} </p>
                <p>Item Price: {itemPrice} </p>
                <p>Tax {tax} </p> 
                <p>Total: {total} </p>
            </div>
            <Link to = '/order-info'>
                <button disabled = {!item.submit} className = 'btn btn-danger'> Place Order</button>
            </Link>
        </div>
    );
};

export default OrderDetails;