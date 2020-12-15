import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Foods from '../../fakeData';
import css from './Meals.css';

const Meals = () => {
    const [meal, setMeal] = useState({})
    const handleMeal = (category) => {
        const meals = Foods.filter(food => food.category == category);
        meals.click = true;
        setMeal(meals);
    }
    const launch = Foods.filter(food => food.category == 'launch');
    const linkStyle = {
        textDecoration: 'none',
    }
    return (
        <div>
            <div className = 'categories d-flex justify-content-around align-items-center'>
                <li><p onClick = {() =>handleMeal('breakfast')}>Breakfast</p></li>
                <li><p onClick = { () =>handleMeal('launch')}>Launch</p></li>
                <li><p onClick = {() =>handleMeal('dinner')}>Dinner</p></li> 
            </div> 
            <div className = 'row'>
            { meal.click ?
                meal.map(a =>{
                   return <div className = 'col-sm-4 col-6 text-center'>  
                            <Link style = {linkStyle} to = {`/menuItem/${a.id}`}>
                                <div className = 'm-2 p-2 meals'>
                                    <img className = 'm-1' src= {a.picture} alt=""/>
                                    <h4> {a.name} </h4>
                                    <p> {a.description} </p>
                                    <h2> ${a.price} </h2>
                                </div>
                            </Link>
                        </div>
                   
                }) : launch.map(a =>{
                    return <div className = 'col-sm-4 col-6  text-center'> 
                    <Link style = {linkStyle} to = {`/menuItem/${a.id}`}>                 
                        <div className = 'm-2 p-2 meals'>
                            <img className = 'm-1' src= {a.picture} alt=""/>
                            <h4> {a.name} </h4>
                            <p> {a.description} </p>
                            <h2> ${a.price} </h2>
                        </div>
                    </Link> 
                    </div>
                })
            }  
            </div>
        </div>        
    );
};

export default Meals;