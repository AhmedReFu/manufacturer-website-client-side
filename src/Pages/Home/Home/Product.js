import React from 'react';

const Product = ({ product }) => {
    const { name, description, img, price, quantity, order } = product;
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
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;