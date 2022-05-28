import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products', {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const revItems = [...products];
    const newItems = revItems.slice(0, 6);
    return (
        <div>
            <h2 className='text-primary text-4xl text-center font-bold py-14'>Our Parts Best Expensive</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10'>
                {
                    newItems.map(product => <Product key={product._id} product={product} ></Product>)
                }
            </div>
        </div >
    );
};

export default Products;