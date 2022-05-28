import React, { useState } from 'react';
import { toast } from 'react-toastify';

const OrderRow = ({ order }) => {
    const [products, setProducts] = useState([]);

    const cancelHandle = id => {
        const proceed = window.confirm('Are you sure?');

        if (proceed) {
            const url = `https://nameless-oasis-38976.herokuapp.com/order/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = products.filter(item => item._id !== id)
                    setProducts(remaining);
                    toast.success('Order Cancel Successfully')
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
                <td for="my-modal-6" ><button onClick={() => payHandle(order._id)} className=' btn btn-xs'>Pay</button></td>
                <td><button onClick={() => cancelHandle(order._id)} className='btn bg-red-500 btn-xs'>Delete</button></td>
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