import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const UserRow = ({ user }) => {
    const hello = () => {
        console.log('hello')
    }
    const makeAdmin = (email) => {
        fetch(`https://nameless-oasis-38976.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to make an admin')
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    console.log('admin success', data)
                    toast.success('Successfully made an admin')
                }
            })
    };
    return (
        <tr>
            <th>{user._id}</th>
            <td>{user.email}</td>
            <td >{user.role === 'admin' ? 'Is Admin' : <button onClick={() => makeAdmin(user.email)} className='btn btn-xs'>Make Admin</button>}</td>
            <td onClick={hello}><button className='btn btn-xs bg-red-500'>Remove User</button></td>
        </tr>
    );
};

export default UserRow;