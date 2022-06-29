import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { RiSave3Line } from 'react-icons/ri';
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
        // console.log(updateProduct);



        const url = `http://localhost:5000/user/${email}`
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
                <h2 className='profile-container-title'>My Profile</h2>

                <form onSubmit={handelUpdateUser}>
                    <div className='single-product-edit'>
                        <div>
                            <label htmlFor="name">Name</label> <br />
                            <input defaultValue={updateUser?.name} type="text" name="name" id="" />
                        </div>
                        <div>
                            <label htmlFor="email">Email</label> <br />
                            <input className='em-email-update' defaultValue={updateUser?.email} type="email" name="email" id="" readOnly />
                        </div>
                        <div>
                            <label htmlFor="phone">Phone</label> <br />
                            <input defaultValue={updateUser?.phone} type="number" name="phone" id="" />
                        </div>
                        <div>
                            <label htmlFor="address">Address</label> <br />
                            <input defaultValue={updateUser?.address} type="text" name="address" id="" />
                        </div>

                        <select value={status} onChange={event => setStatus(event.target.value)} required>
                            <option disabled selected>Dashboard Status</option>
                            <option>Admin</option>
                            <option>Accounts</option>
                        </select>
                        <div>
                            {updateUser?.status}
                        </div>
                        <div>
                            <label htmlFor="position">Designation</label> <br />
                            <input defaultValue={updateUser?.position} type="text" name="position" id="" />
                        </div>
                        <div>
                            <label htmlFor="hfid">HF Id</label> <br />
                            <input defaultValue={updateUser?.hfid} type="number" name="hfid" id="" />
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