import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Product from '../Home/Home/Product';
import Loading from '../Shared/Loading/Loading';

const AllProducts = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    if (!products) {
        return <Loading></Loading>
    }

    return (
        <div className='shadow py-10'>
            <h2 className='text-primary text-4xl text-center font-bold py-14'>Our All Parts</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10'>
                {
                    products.map(product => <Product key={product._id} product={product} ></Product>)
                }
            </div>
        </div >
    );
};

export default AllProducts;