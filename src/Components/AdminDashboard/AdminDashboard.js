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
                            user && <li><Link to='/dashboard'>Dashboard</Link></li>
                        }


                        {
                            user && <div class="dropdown">
                                <label tabindex="0" class="flex">
                                    <p className='m-3'>All Ledger</p>
                                    <svg class="mt-3 fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg> 
                                </label>
                                <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-52">
                                    <li><Link to='/dashboard/cash-book'>Cash Book</Link></li>
                                    <li><Link to='/dashboard/bank-book'>Bank Book</Link></li>
                                    <li><Link to='/dashboard/ac-receivable'>A/C Receivable</Link></li>
                                    <li><Link to='/dashboard/current-asset'>Current Asset</Link></li>
                                    <li><Link to='/dashboard/current-liabilities'>Current Liabilities</Link></li>
                                    <li><Link to='/dashboard/direct-expense'>Direct Expense</Link></li>
                                    <li><Link to='/dashboard/general-admin-expense'>General & Admin Expense</Link></li>
                                    <li><Link to='/dashboard/project-expense'>Project Expense</Link></li>
                                    <li><Link to='/dashboard/income'>Income</Link></li>
                                    <li><Link to='/dashboard/share-capital'>Share Capital</Link></li>
                                    <li><Link to='/dashboard/sales-input'>Sales Input</Link></li>
                                    <li><Link to='/dashboard/vendor-ledger'>Vendor Ledger</Link></li>

                                </ul>

                            </div>
                        }
                        {
                            user && <div class="dropdown">
                                <label tabindex="0" class="flex">
                                <p className=' m-3'>Report</p>
                                    <svg class="mt-3 fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                </label>
                                <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-52">
                                    <li><Link to='/dashboard/sales-report'>Sales Report</Link></li>
                                    <li><Link to='/dashboard/loss-profit'>Loss/Profit</Link></li>
                                    <li><Link to='/dashboard/debtor'>Debtor</Link></li>
                                    <li><Link to='/dashboard/creditor'>Creditor</Link></li>
                                    <li><Link to='/dashboard/cash-flow'>Cash flow</Link></li>
                                </ul>

                            </div>
                        }
                        
                        {
                            user && <li><Link to='/dashboard/vendor'>Vendor</Link></li>
                        }
                        {
                            user && <li><Link to='/dashboard/project'>Project</Link></li>
                        }
                        {
                            user && <li><Link to='/dashboard/balance-sheet'>Balance Sheet</Link></li>
                        }
                        {
                            user && <li><Link to='/dashboard/employee'>Employee</Link></li>
                        }

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