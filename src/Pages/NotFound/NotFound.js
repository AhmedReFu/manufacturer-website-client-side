import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="hero min-h-screen bg-gradient-to-r from-sky-500 to-indigo-500">
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="hero-content text-center text-white">
                <div className="max-w-md">
                    <h1 className="mb-5 text-8xl font-bold">Oops !</h1>
                    <h1 className="mb-5 text-4xl font-bold">404 - Page not found</h1>
                    <p className="mb-5">The page you requested was not found. Please enter our page menu button.</p>
                    <Link className="btn btn-primary text-2xl w-40" to='/'>Home</Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;