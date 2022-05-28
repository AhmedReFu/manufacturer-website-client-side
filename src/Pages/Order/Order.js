import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';

const Order = () => {
    const [user] = useAuthState(auth);
    const { id } = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
            })
    }, [])

    const quantity = () => {

    }

    return (
        <div className='flex lg:flex-row flex-col py-6'>

            <div className='card flex-1 lg:w-6/12 w-full bg-blue-200 p-5 shadow-xl m-4'>
                <h2 className='text-2xl'>You are about to buy parts: {product.name}</h2>
                <figure><img className='w-40' src={product.img} alt={product.name} /></figure>
                <div className="card-body ">
                    <p className='text-xl'>{product.description}</p>
                    <p className='text-xl'>Minimum Order: {product.order}</p>
                    <p className='text-xl'>Available Product: {product.quantity}</p>
                    <p className='text-xl'>Per Piece: {product.price}</p>
                </div>
            </div>
            <div className=' card bg-primary lg:w-6/12 w-full flex flex-col items-center py-8 m-4'>
                <h1 className='my-3 text-2xl text-center text-white py-3'>Order Summary</h1>
                <div className="w-full max-w-xs ">
                    <form >
                        {/* Email  */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-bold text-white">Email</span>
                            </label>
                            <input
                                type="email"
                                name='email'
                                disabled
                                className="input input-bordered w-full max-w-xs"
                                value={user?.email}
                            />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-bold text-white">Quantity</span>
                            </label>
                            <input
                                onChange={quantity}
                                type="number"
                                name='quantity'
                                required
                                className="input input-bordered w-full max-w-xs font-bold"
                                placeholder={`minimun order quantity ${product.order}`}
                            />
                            <label className="label">
                                {<span className="label-text-alt text-red-500">{ }</span>}</label>

                        </div>


                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-bold text-white">Total Amount</span>
                            </label>
                            <input
                                type="number"
                                name='amount'
                                disabled
                                className="input input-bordered w-full max-w-xs font-bold "

                            />
                        </div>


                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-bold text-white">Address</span>
                            </label>
                            <input
                                type="text"
                                required
                                name='address'
                                className="input input-bordered w-full max-w-xs"
                            />
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-bold text-white">Phone</span>
                            </label>
                            <input
                                type="number"
                                required
                                name='phone'
                                className="input input-bordered w-full max-w-xs"
                            />
                        </div>
                        <input className={`btn btn-secondary mt-4 w-full max-w-xs py-4`} type="submit" value="Place Order" />
                    </form>
                </div>
            </div>

        </div>
    );
};
// ${error ? 'disabled' : ''}
export default Order;