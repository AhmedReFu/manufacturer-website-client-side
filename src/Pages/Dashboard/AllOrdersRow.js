import React from 'react';

const AllOrdersRow = ({ order, index }) => {

    const { userName, userEmail, productName, orderQuantity, totalAmount, shippingAddress, phone } = order;
    return (

        <tr className='text-primary'>
            <th>{index + 1}</th>
            <td>{userName}</td>
            <td>{userEmail}</td>
            <td>{productName}</td>
            <td>{orderQuantity}</td>
            <td>{totalAmount}</td>
            <td>{shippingAddress}</td>
            <td>{phone}</td>
        </tr>


    );
};

export default AllOrdersRow;