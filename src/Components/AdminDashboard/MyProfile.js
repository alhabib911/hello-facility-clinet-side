import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';
import { FiEdit } from 'react-icons/fi';
import './MyProfile.css'

const MyProfile = () => {
    const [user] = useAuthState(auth)
    console.log(user);

    return (
        <div className='dashboard-container'>
            <h2 className='profile-container-title'>My Profile</h2>
            <div className="user-info">
                <div className="user-name">
                    Name: {user.displayName}
                </div>
                <div className="user-email">
                    Email: {user.email}
                </div>
                <div className="user-phone">
                    Phone: {user.phoneNumber}
                </div>
                <div className="user-status">
                    User Status:
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