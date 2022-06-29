import React, { useState } from 'react';
import useVendor from '../hooks/useVendor';
import Vendors from './Vendors';

const Vendor = () => {
    const [setVendor] = useState([])
    const handelVendorDetails = event => {
        event.preventDefault()
        const name = event.target.name.value
        const email = event.target.email.value
        const phone = event.target.phone.value
        const address = event.target.address.value
        const account = event.target.account.value


        const vendorInfo = { name, email, phone, address, account }
        setVendor(vendorInfo)

        fetch('http://localhost:5000/vendor', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(vendorInfo)
        })
            .then(res => res.json())
            .then((data) => {
                event.target.reset()
            })

    }
    const [vendor] = useVendor()
    console.log(vendor);

    return (
        <div>
            <div>
                <form onSubmit={handelVendorDetails}>
                    <label htmlFor="name">Vendor Name</label>
                    <input type="text" name='name' placeholder='Vendor Name' />
                    <label htmlFor="email">Vendor Email</label>
                    <input type="text" name='email' placeholder='Vendor Email' />
                    <label htmlFor="phone">Phone</label>
                    <input type="number" name="phone" id="" placeholder='Phone Number' />
                    <label htmlFor="address">Address</label>
                    <input type="text" name='address' placeholder='Vendor Address' />
                    <label htmlFor="account">Account Details</label>
                    <input type="text" name='account' placeholder='Account Details' />
                    <input type="submit" value="Save" />
                </form>
            </div>
            <div>
               {
                vendor.map(vendor=> <Vendors
                    vendor={vendor}
                ></Vendors>)
               }
            </div>

        </div>
    );
};

export default Vendor;