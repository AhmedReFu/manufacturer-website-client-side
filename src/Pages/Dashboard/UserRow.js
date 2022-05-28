import React from 'react';

const UserRow = ({ user }) => {
    return (
        <tr>
            <th>{user._id}</th>
            <td>{user.email}</td>
            <td><button className='btn btn-xs'>Make Admin</button></td>
            <td>Remove user</td>
        </tr>
    );
};

export default UserRow;