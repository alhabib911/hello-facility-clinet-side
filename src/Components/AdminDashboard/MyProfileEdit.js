import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { RiSave3Line } from 'react-icons/ri';
import { CgProfile } from 'react-icons/cg';
import { MdCall } from 'react-icons/md';
import { MdLocationPin } from 'react-icons/md';
import { FiUserPlus } from 'react-icons/fi';
import { RiUserFollowLine } from 'react-icons/ri';
import { RiQrCodeFill } from 'react-icons/ri';
import auth from '../firebase.init';
import './MyProfile.css'
import useUpdateUser from '../hooks/useUpdateUser';

const MyProfileEdit = () => {
    const [user] = useAuthState(auth)
    const [updateUser] = useUpdateUser()
    console.log(updateUser);
    const [status, setStatus] = useState()

    const handelUpdateUser = event => {
        event.preventDefault()
        const name = event.target.name.value
        const email = event.target.email.value
        const phone = event.target.phone.value
        const address = event.target.address.value
        const position = event.target.position.value
        const hfid = event.target.hfid.value



        const updateProfile = { name, email, phone, address, status, position, hfid }



        const url = `https://hidden-shelf-50745.herokuapp.com/user/${email}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                // authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(updateProfile)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                // toast('Update Successful');
                window.location.reload();
                event.target.reset()
            })
    }
    return (
        <div>
            <div className='dashboard-container'>
                <h2 className='profile-container-title'>Profile Update</h2>

                <form onSubmit={handelUpdateUser}>
                    <div className='Profile-edit'>
                        <div className='em-up-user'>
                            <label htmlFor="email"></label> <br />
                            <input defaultValue={updateUser?.email} type="email" name="email" id="" readOnly />
                        </div>
                        <div className='la-in'>
                            <div className="la">
                                <label htmlFor="name">Name</label> <CgProfile />
                            </div>
                            <div className="in">
                                <input defaultValue={updateUser?.name} type="text" name="name" id="" />
                            </div>
                        </div>
                        <div className='la-in'>
                            <div className="la">
                                <label htmlFor="phone">Phone</label> 
                                <br />
                                <div className="phone-icon">
                                <MdCall /> +880
                                </div>
                            </div>
                            <div className="in">
                                <input defaultValue={updateUser?.phone} type="number" name="phone" id="" />
                            </div>
                        </div>
                        <div className='la-in'>
                            <div className="la">
                                <label htmlFor="address">Address</label> <MdLocationPin />
                            </div>
                            <div className="in">
                                <input defaultValue={updateUser?.address} type="text" name="address" id="" />
                            </div>
                        </div>
                        <div className='la-in'>
                            <div className="la">
                                <select value={status} onChange={event => setStatus(event.target.value)} required>
                                    <option disabled selected>Dashboard Status</option>
                                    <option>Admin</option>
                                </select> <FiUserPlus />
                            </div>
                            <div className="in">
                                <input defaultValue={updateUser?.status} type="text" name="status" id="" />
                            </div>
                        </div>

                        <div className='la-in'>
                            <div className="la">
                                <label htmlFor="position">Designation</label> <RiUserFollowLine />
                            </div>
                            <div className="in">
                                <input defaultValue={updateUser?.position} type="text" name="position" id="" />
                            </div>
                        </div>
                        <div className='la-in'>
                            <div className="la">
                                <label htmlFor="hfid">HF Id</label> <RiQrCodeFill />
                            </div>
                            <div className="in">
                                <input defaultValue={updateUser?.hfid} type="number" name="hfid" id="" />
                            </div>
                        </div>
                    </div>
                    <div className="update-user-info">
                        <RiSave3Line />
                        <input className='update-user' type="submit" value="Save Change" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MyProfileEdit;