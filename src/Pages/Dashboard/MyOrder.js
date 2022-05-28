import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrder = () => {
    const [user] = useAuthState(auth);
    const [myOrder, setMyOrder] = useState({});
    return (
        <div>
            <h2 className="text-2xl">ALl Users: {user.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        <th>{ }</th>
                        <th>{user.displayName}</th>
                        <th>{user.email}</th>
                        <th>{user.phoneNumber}</th>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;