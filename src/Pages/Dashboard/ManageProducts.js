import React, { useEffect, useState } from 'react';
import DeleteConfirmModal from './DeleteConfirmModal';
import ManageRow from './ManageRow';
const ManageProducts = () => {


    const [deletingProduct, setDeletingProduct] = useState(null)


    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://nameless-oasis-38976.herokuapp.com/products', {

            method: 'GET',

            headers: {

                authorization: `Bearer ${localStorage.getItem('accessToken')}`

            }

        })
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })

    }, [products])





    return (
        <div >
            <h2 className="text-2xl">Manage products:{products.length}</h2>

            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Image</th>
                            <th>Product Name</th>
                            <th>Delete Product</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            products.map((product, index) => <ManageRow
                                key={product._id}
                                product={product} index={index}
                                setDeletingProduct={setDeletingProduct}>

                            </ManageRow>)
                        }

                    </tbody>
                </table>
            </div>

            {
                deletingProduct && <DeleteConfirmModal
                    setDeletingProduct={setDeletingProduct} deletingProduct={deletingProduct} ></DeleteConfirmModal>
            }


        </div>
    );
};

export default ManageProducts;