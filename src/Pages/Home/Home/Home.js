import React from 'react';
import Banner from './Banner/Banner';
import Optional from './Optional';
import OurCompany from './OurCompany';
import Products from './Products';
import Summary from './Summary';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Optional></Optional>
            <Summary></Summary>
            <OurCompany></OurCompany>
        </div>
    );
};

export default Home;