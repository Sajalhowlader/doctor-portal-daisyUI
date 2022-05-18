import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
const Header = () => {
    const [user] = useAuthState(auth);
    const singOut = () => {
        signOut(auth);
        localStorage.removeItem('accessToken')
    };



    const menu = <>
        <li><Link to='/home' className='font-bold text-neutral'  >HOME</Link></li>
        <li><Link to='/about' className='font-bold text-neutral'  >ABOUT</Link></li>
        <li><Link to='/appointment' className='font-bold text-neutral'  >APPOINTMENT</Link></li>
        <li><Link to='/reviews' className='font-bold text-neutral'  >REVIEWS</Link></li>
        <li><Link to='/contact' className='font-bold text-neutral'  >CONTACT US</Link></li>
        {user && <li><Link to='/dashboard' className='font-bold text-neutral'  >DASHBOARD</Link></li>}

        {user ?
            <li onClick={singOut}><p className='font-bold  text-red-500'  >SING OUT</p></li>
            : <li><Link to='/singIn' className='font-bold text-neutral'  >SING IN</Link></li>
        }
        {
            user && <li><Link to='/singIn' className='font-bold text-neutral'  >{user.displayName}</Link></li>
        }
    </>
    return (
        <nav className="nav-color bg-cyan-900">
            <div className="container mx-auto">
                <div className="navbar ">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                {menu}
                            </ul>
                        </div>
                        <Link to='/home' className="normal-case text-xl"><span className='font-bold uppercase text-white'>Doctor Portal</span></Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal p-0">
                            {menu}
                        </ul>
                    </div>
                    <div className="navbar-end lg:w-0">
                        <label className="btn btn-ghost lg:hidden" for="dashboard-side-ber" >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>

                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;