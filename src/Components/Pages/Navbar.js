import React from 'react';
import ColorLogo from '../../images/Logo/Color.png'
import { Link } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="navbar-divider">
            {/* <hr /> */}
            <div className='navbar-container'>
                <div class="navbar bg-base-100">
                    <div class="navbar-start">
                        <div class="dropdown">
                            <label tabindex="0" class="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a>Item 1</a></li>
                                <li tabindex="0">
                                    <a class="justify-between">
                                        Services
                                        <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                    </a>
                                    <ul class="p-2 absolute bg-white">
                                        <li><a>Cleaning Service</a></li>
                                        <li><a>Submenu 2</a></li>
                                    </ul>
                                </li>
                                <li><Link to='/client'>Client</Link></li>
                                <li><Link to='/gallery'>Gallery</Link></li>
                                <li><Link to='/blog'>Blog</Link></li>
                                <li><Link to='/contacts'>Contact Us</Link></li>
                            </ul>
                        </div>
                        <Link to='/'><img className='color-logo' src={ColorLogo} alt="" /></Link>
                    </div>
                    <div class="navbar-center hidden lg:flex">
                        <ul class="menu menu-horizontal p-0">
                            <li><Link to='/'>Home</Link></li>
                            <div class="dropdown">
                                <label tabindex="0" class="btn btn-ghost">
                                    Service
                                    <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                </label>
                                <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li><Link to='/cleaning'>Cleaning Service</Link></li>
                                <li><Link to='/car-rental'>Car Rental</Link></li>
                                <li><Link to='/Building-management'>Building Management Solution</Link></li>
                                <li><Link to='/stationary'>Stationery Supply</Link></li>
                                <li><Link to='/pest-control'>Pest control</Link></li>
                                <li><Link to='/Gardening'>Gardening</Link></li>
                                </ul>
                            </div>
                            <li><Link to='/client'>Client</Link></li>
                            <li><Link to='/gallery'>Gallery</Link></li>
                            <li><Link to='/blog'>Blog</Link></li>
                            <li><Link to='/contacts'>Contact Us</Link></li>
                        </ul>
                    </div>
                    {/* <div class="navbar-end">
                        <a class="btn">Get started</a>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Navbar;