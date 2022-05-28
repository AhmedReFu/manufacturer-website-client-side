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
        <div class="navbar bg-base-100 text-xl">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menus}
                    </ul>
                </div>
                <p class=" normal-case text-2xl font-bold">Computer Parts World</p>
            </div>
            <div class="navbar-end hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    {menus}
                </ul>
            </div>

        </div>
    );
};

export default Header;