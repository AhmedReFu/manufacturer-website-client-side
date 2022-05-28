import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, name, description, img, price, quantity, order } = product;
    const navigate = useNavigate();
    const navigateToServiceDetail = id => {
        navigate(`/order/${id}`)
    }
    return (
        <div class="card w-full bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p className='text-xl'>{description}</p>
                <p className='text-xl'>Minimum Order: {order}</p>
                <p className='text-xl'>Available Product: {quantity}</p>
                <p className='text-xl'>Per Piece: {price}</p>
                <div class="card-actions">
                    <button onClick={() => navigateToServiceDetail(_id)} class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;