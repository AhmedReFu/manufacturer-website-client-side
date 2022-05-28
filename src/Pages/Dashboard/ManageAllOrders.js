import React, { useEffect, useState } from 'react';
import AllOrdersRow from './AllOrdersRow';

const ManageAllOrders = () => {


    const [allOrder, setAllOrder] = useState([]);

    useEffect(() => {
        fetch('https://nameless-oasis-38976.herokuapp.com/allorder', {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }

        })
            .then(res => res.json())
            .then(data => setAllOrder(data));
    }, [])

    return (
        <div className="overflow-x-auto bg-primary">
            <table className="table w-full ">

                <thead >
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Amount</th>
                        <th>shippingAddress</th>
                        <th>phone</th>

                    </tr>
                </thead>
                <tbody>

                    {
                        allOrder.map((order, index) => <AllOrdersRow key={order._id} order={order} index={index}></AllOrdersRow>)
                    }


                </tbody>
            </table>
        </div>
    );
};

export default ManageAllOrders;