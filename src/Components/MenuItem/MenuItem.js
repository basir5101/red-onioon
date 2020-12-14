import React, { useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { orderItem } from '../../App';
import Foods from '../../fakeData';
import css from './MenuItem.css';

const MenuItem = () => {
    const [item, setItem] = useContext(orderItem);
    const [itemNumber, setItemNumber] = useState(1);
    const {itemId} = useParams();
    const menuItem = Foods.find(f => f.id == itemId)
    const handleAddItem = (menuId) =>{
        const meal = Foods.find(f => f.id == menuId) ;  
        const newItem = [...item, meal];
        setItem(newItem);
    }

    const increase = () =>{
        const newNumber = itemNumber + 1;
        setItemNumber(newNumber);
        const newItemPrice = {...menuItem};
        menuItem.price = menuItem.price * newNumber;
        console.log(menuItem.price)
    }

    const decrease = () =>{
        if(itemNumber > 1){
            const newNumber = itemNumber - 1;
            setItemNumber(newNumber);
            menuItem.price = menuItem.price * newNumber;
        } else {
            alert('Item Number cannot be zero')
        }
    }

    return (
        <div className = 'container menuItem'>
            <div className="item row">
                <div className="details col-sm-5">
                    <h2> {menuItem.name} </h2>
                    <p>Lorem ipsum sunt dolores incidunt tempore mollitia deserunt sequi obcaecati. Possimus, incidunt!</p>
                    <div className = 'd-flex price'>
                        <h2> ${menuItem.price.toFixed(2)} </h2> 
                        <div className = 'row change'>
                            <button onClick = {decrease}> - </button>
                            <input value = {itemNumber} className = '' type="text"/>
                            <button onClick = {increase} className = 'plus'> + </button>
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