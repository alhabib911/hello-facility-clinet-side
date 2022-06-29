import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';
import { FiEdit } from 'react-icons/fi';
import './MyProfile.css'
import useUpdateUser from '../hooks/useUpdateUser';

const MyProfile = () => {
    const [user] = useAuthState(auth)
    const [updateUser] = useUpdateUser()
    console.log(updateUser);

    console.log(user);

    return (
        <div className='dashboard-container'>
            <h2 className='profile-container-title'>My Profile</h2>
            <div className="user-info">
                <div className="user-name">
                    Name: {updateUser?.name || user.displayName}
                </div>
                <div className="user-email">
                    Email: {user.email}
                </div>
                <div className="user-phone">
                    Phone: {updateUser?.phone ||user.phoneNumber}
                </div>
                <div className="user-address">
                    Address: {updateUser?.address}
                </div>
                <div className="user-status">
                    User Status: {updateUser?.status}
                </div>
                <div className="user-position">
                    Designation: {updateUser?.position}
                </div>
                <div className="user-hfid">
                    HF Id: {updateUser?.hfid}
                </div>

            </div>
            <div className="update-link">
                <div className="update-link-icon">
                    <FiEdit />
                </div>
                <div className="update-link-btn">
                    <Link to='/dashboard/profile/edit'>Update Profile</Link>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;