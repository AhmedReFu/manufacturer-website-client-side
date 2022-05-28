import React, { useState } from 'react';

const OrderRow = ({ order }) => {
    const [products, setProducts] = useState([]);

    const cancelHandle = id => {
        const proceed = window.confirm('Are you sure?');

        if (proceed) {
            const url = `http://localhost:5000/order/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = products.filter(item => item._id !== id)
                    setProducts(remaining);
                })
        }

    }



    const payHandle = (id) => {
        console.log('payment complete', id)
    }
    return (
        <>
            <tr>
                <td>{order.userEmail}</td>
                <td for="my-modal-6" ><button onClick={() => payHandle(order._id)} className='btn'>Pay</button></td>
                <td><button onClick={() => cancelHandle(order._id)} className='btn bg-red-500'>Delete</button></td>
                <td>{order.trxId}</td>
                <td>{order.productName}</td>
                <td>{order.totalAmount}</td>
                <td>{order.phone}</td>
                <td>{order.shippingAddress}</td>
            </tr>

        </>
    );
};

export default OrderRow;