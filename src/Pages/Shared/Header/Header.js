import React from 'react';
import { signOut } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth)
        localStorage.removeItem('accessToken');
    }
    const menus = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/product'>Product</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>
        <li><Link to='/about'>About Us</Link></li>



        {user ?
            <>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <button onClick={logout} className='btn btn-ghost'><Link to=''>Sign Out</Link></button>
            </>
            :
            <>
                <li><Link to='/login'>Login</Link></li>
            </>
        }

    </>

    return (
        <div className="navbar bg-base-100 text-xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menus}
                    </ul>
                </div>
                <p className=" normal-case text-2xl font-bold">Computer Parts World</p>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menus}
                </ul>
            </div>

        </div>
    );
};

export default Header;