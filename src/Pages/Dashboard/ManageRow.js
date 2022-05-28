import React from 'react';
import { toast } from 'react-toastify';


const ManageRow = ({ product, index, setDeletingProduct }) => {
    const { _id, name, img } = product;
    const handleDelete = id => {


        fetch(`https://nameless-oasis-38976.herokuapp.com/products/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                console.log(data)
                if (data.deletedCount) {
                    toast.success(`Delete ${name}`);

                    setDeletingProduct(null)
                }
            })
    }

    return (

        <tr>
            <th>{index + 1}</th>

            <td><div className="avatar">
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={img} alt={name} />
                </div>
            </div> </td>
            <td>{name} {_id}</td>


            <td> <label onClick={() => handleDelete(_id)} className="btn btn-xs btn-error">delete</label>

            </td>
        </tr>

    );
};

export default ManageRow;