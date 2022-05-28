import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Order = () => {
    const [user] = useAuthState(auth);
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [orderQuantity, setOrderQuantity] = useState(null);
    const [totalPrice, setTotalPrice] = useState(null);
    const [error, setError] = useState('');
    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
            })
    }, [])

    const { name, img, order, price, description, quantity } = product;

    const updateAmount = event => {
        const inputQuantity = event.target.value;
        if (inputQuantity >= product.order) {
            setOrderQuantity(inputQuantity);
            setError('')
            if (inputQuantity <= product.quantity) {
                const totalAmount = inputQuantity * product.price;
                setTotalPrice(totalAmount)
            } else {
                setError('Please add minimum enter 50')
                setTotalPrice('')
            }
        } else {
            setError('Please add minimum enter 50')
            setTotalPrice('')
        }
    }

    const handleSubmit = event => {
        event.preventDefault()
        const address = event.target.address.value;
        const phone = event.target.phone.value;
        const order = {
            userName: user.displayName,
            userEmail: user.email,
            productName: name,
            orderQuantity: orderQuantity,
            totalAmount: totalPrice,
            shippingAddress: address,
            phone: phone,
            trxId: '',
            img: img
        }
        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if ({ insertedId: true }) {
                    toast('Order Palaced')
                    event.target.reset()
                    setTotalPrice(null);
                }
                else {
                    toast.error('something has wrong please try again')
                }
            })
    };

    return (
        <div className='flex lg:flex-row flex-col py-6'>

            <div className='card flex-1 lg:w-6/12 w-full bg-blue-200 p-5 shadow-xl m-4'>
                <h2 className='text-2xl'>You are about to buy parts: {name}</h2>
                <figure><img className='w-40' src={img} alt={name} /></figure>
                <div className="card-body ">
                    <p className='text-xl'>{description}</p>
                    <p className='text-xl'>Minimum Order: {order}</p>
                    <p className='text-xl'>Available Product: {quantity}</p>
                    <p className='text-xl'>Per Piece: {price}</p>
                </div>
            </div>
            <div className=' card bg-indigo-300 lg:w-6/12 w-full flex flex-col items-center py-8 m-4'>
                <h1 className='my-3 text-2xl text-center text-white py-3'>Order Summary</h1>
                <div className="w-full max-w-xs ">
                    <form onSubmit={handleSubmit}>
                        {/* Email  */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-bold text-white">Email</span>
                            </label>
                            <input
                                type="email"
                                name='email'
                                readOnly
                                className="input input-bordered w-full max-w-xs"
                                value={user?.email}
                            />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-bold text-white">Quantity</span>
                            </label>
                            <input
                                onChange={updateAmount}
                                type="number"
                                name='inputQuantity'
                                required
                                className="input input-bordered w-full max-w-xs font-bold"
                                placeholder={`minimum order quantity ${order}`}
                            />
                            <label className="label">
                                {<span className="label-text-alt text-xl text-red-500">{error}</span>}</label>

                        </div>


                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-bold text-white">Total Amount</span>
                            </label>
                            <input
                                type="number"
                                name='amount'
                                placeholder='total amount'
                                readOnly
                                className="input input-bordered w-full max-w-xs font-bold "
                                value={totalPrice}
                            />
                        </div>


                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-bold text-white">Address</span>
                            </label>
                            <input
                                type="text"
                                required
                                placeholder='your address'
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
                                placeholder='Mobile Number'
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