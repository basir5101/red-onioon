import React from 'react';
import Foods from '../../fakeData';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Meals from '../Meals/Meals';

const Home = () => {
    
    return (
        <div>
            <Meals></Meals>
            <Footer />
        </div>
    );
};

export default Home;