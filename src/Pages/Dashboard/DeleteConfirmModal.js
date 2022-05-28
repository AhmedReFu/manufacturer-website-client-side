import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({ deletingProduct, setDeletingProduct }) => {

    const { name, _id } = deletingProduct;


    const handleDelete = id => {


        fetch(`http://localhost:5000/products/${id}`, {
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
        <div>



            <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-red-700 text-lg"> Are you Sure You Want to Delete  {name} </h3>

                    <div className="modal-action">
                        {/* from doctor row  */}
                        <button onClick={() => handleDelete(_id)} className="btn btn-xs btn-error">Delete</button>
                        <label htmlFor="delete-confirm-modal" className="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DeleteConfirmModal;