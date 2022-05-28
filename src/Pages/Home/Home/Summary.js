import React from 'react';
import { useNavigate } from 'react-router-dom';
import BusinessHistory from '../BusineesHistory/BusinessHistory';

const Summary = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h2 className='text-primary text-7xl text-center font-bold pt-14'>Our Business Summary</h2>
            <h3 className='text-xl text-center font-bold py-4'>Try To Understand Users' Expectation</h3>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 py-14'>
                <BusinessHistory></BusinessHistory>
            </div>
            <div className='flex lg:flex-row flex-wrap md:flex-col sm:flex-col items-center py-12'>
                <div className='p-4'>
                    <h2 className='text-primary text-4xl font-bold'>Have any question about us or contact us</h2>
                    <h3 className='text-xl font-bold'>Don't hesitate to contact us</h3>
                </div>
                <div className='ml-14 p-4'>
                    <button onClick={() => navigate('/product')} className="btn btn-primary text-xl mx-8">Buy Now</button>

                    <a className="btn btn-primary text-xl" href="/#contact">Contact Us</a>
                </div>
            </div>
        </div >
    );
};

export default Summary;