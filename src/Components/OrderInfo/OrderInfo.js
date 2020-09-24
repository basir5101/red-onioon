import React, { useContext } from 'react';
import { userContext } from '../../App';

const OrderInfo = () => {
    const [user, setUser] = useContext(userContext)
    return (
        <div className = 'text-center text-success'>
            <h3>Dear, {user.name} </h3>
            <h1>Order-Placed</h1>
        </div>
    );
};

export default OrderInfo;