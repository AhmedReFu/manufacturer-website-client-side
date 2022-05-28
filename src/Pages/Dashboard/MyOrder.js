import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import OrderRow from './OrderRow';

const MyOrder = () => {
    const [items, setItems] = useState([]);
    const [user] = useAuthState(auth);

    const navigate = useNavigate();
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/order?userEmail=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {

                        localStorage.removeItem('accessToken');
                        signOut(auth);
                        navigate('/')
                    }
                    return res.json();
                })
                .then(data => {

                    setItems(data)

                })
        }
    }, [items])

    return (
        <div>
            <h2 className="text-2xl">All Order</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>Payment</th>
                            <th>Delete</th>
                            <th>TrxId</th>
                            <th>Name Item</th>
                            <th>Amount</th>
                            <th>Phone</th>
                            <th>Shipping Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map(order =>
                                <OrderRow key={order._id} order={order}></OrderRow>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;