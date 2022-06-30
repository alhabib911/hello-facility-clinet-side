import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../firebase.init';
import AdminNavbar from '../Pages/AdminNavbar';
import './AdminDashboard.css'

const AdminDashboard = () => {
    const [user] = useAuthState(auth)
    return (
        <div>
            <AdminNavbar></AdminNavbar>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content ">
                    <label tabindex="0" for="my-drawer-2" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <Outlet></Outlet>


                </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-56 bg-base-200 text-base-content">
                        
                        {
                            user && <li><Link to='/dashboard/add-gallery'>Gallery</Link></li>
                        }
                        {
                            user && <li><Link to='/dashboard/add-blog'>Blog</Link></li>
                        }
                        {
                            user && <li><Link to='/dashboard/user-status'>User Status</Link></li>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;