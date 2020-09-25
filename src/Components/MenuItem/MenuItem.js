import React, { useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { orderItem } from '../../App';
import Foods from '../../fakeData';
import css from './MenuItem.css';

const MenuItem = () => {
    const [item, setItem] = useContext(orderItem);
    const {itemId} = useParams();
    const menuItem = Foods.find(f => f.id == itemId)
    const handleAddItem = (menuId) =>{
        const meal = Foods.find(f => f.id == menuId) ;  
        const newItem = [...item, meal];
        setItem(newItem);
    }

    return (
        <div className = 'container menuItem'>
            <div className="item row">
                <div className="details col-sm-5">
                    <h2> {menuItem.name} </h2>
                    <p>Lorem ipsum sunt dolores incidunt tempore mollitia deserunt sequi obcaecati. Possimus, incidunt!</p>
                    <div className = 'd-flex price'>
                        <h2> ${menuItem.price} </h2> 
                        <div className = 'd-flex change'>
                            <button> - </button>
                            <input value = '1' className = '' type="text"/>
                            <button className = 'plus'> + </button>
                        </div>
                    </div>
                    <Link to = '/place-order'>
                        <button onClick = {() =>handleAddItem(itemId)} className = 'btn btn-success m-2'>Add</button>
                    </Link>
                </div>
                <div className="image col-sm-7">
                    <img src= {menuItem.picture} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;