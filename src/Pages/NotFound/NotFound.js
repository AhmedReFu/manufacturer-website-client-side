import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div class="hero min-h-screen bg-gradient-to-r from-sky-500 to-indigo-500">
            <div class="hero-overlay bg-opacity-80"></div>
            <div class="hero-content text-center text-white">
                <div class="max-w-md">
                    <h1 class="mb-5 text-8xl font-bold">Oops !</h1>
                    <h1 class="mb-5 text-4xl font-bold">404 - Page not found</h1>
                    <p class="mb-5">The page you requested was not found. Please enter our page menu button.</p>
                    <Link class="btn btn-primary text-2xl w-40" to='/'>Home</Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;