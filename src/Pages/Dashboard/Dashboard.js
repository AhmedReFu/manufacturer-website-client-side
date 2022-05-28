import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    return (
        <div className="drawer bg-purple-200 drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h2 className='text-3xl font-bold text-purple-500'>Dashboard</h2>
                <h2 className='text-2xl font-bold text-purple-500'>{user.displayName}</h2>
                <Outlet></Outlet>
                {/* <!-- Page content here --> */}
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-50 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to="/dashboard">My Profile</Link></li>
                    <li><Link to="/dashboard/myorder">My Order</Link></li>
                    <li><Link to="/dashboard/history">My Review</Link></li>
                    {
                        user &&
                        <>
                            <li><Link to="/dashboard/users">All Users</Link></li>
                            <li><Link to="/dashboard/addDoctor">Add a Doctor</Link></li>
                        </>
                    }
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;