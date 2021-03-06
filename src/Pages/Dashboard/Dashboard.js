import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div className="drawer bg-purple-200 drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h2 className='text-3xl font-bold text-purple-500'>Dashboard {user.displayName}</h2>

                <Outlet></Outlet>
                {/* <!-- Page content here --> */}
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-50 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to="/dashboard">My Profile</Link></li>

                    {
                        admin ?
                            <>
                                <li><Link to="/dashboard/makeAdmin">Make Admin</Link></li>
                                <li><Link to="/dashboard/addProduct">Add Product</Link></li>
                                <li><Link to="/dashboard/manageProducts">Manage Products</Link></li>
                                <li><Link to="/dashboard/manageorders">Manage All Orders</Link></li>
                            </> :

                            <>
                                <li><Link to="/dashboard/myorder">My Order</Link></li>
                                <li><Link to="/dashboard/addreview">My Review</Link></li></>
                    }
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;