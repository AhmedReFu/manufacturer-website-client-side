import React from 'react';
import Banner from './Banner/Banner';
import Contact from './Contact';
import Optional from './Optional';
import OurCompany from './OurCompany';
import Products from './Products';
import Reviews from './Reviews';
import Summary from './Summary';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Optional></Optional>
            <Summary></Summary>
            <Reviews></Reviews>
            <OurCompany></OurCompany>
            <Contact></Contact>

        </div>
    );
};

export default Home;