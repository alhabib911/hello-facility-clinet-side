import React, { useState } from 'react';
import useVendor from '../hooks/useVendor';

const Vendor = () => {
    const [vendorDetails, setVendorDetails] = useState([])
    const handelVendorDetails = event => {
        event.preventDefault()
        const name = event.target.name.value
        const email = event.target.email.value
        const phone = event.target.phone.value
        const address = event.target.address.value
        const account = event.target.account.value


        const vendorInfo = { name, email, phone, address, account }
        setVendorDetails(vendorInfo)

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
                <div class="overflow-x-auto">
                    <table class="table w-full">
                        <p className='mt-10 ml-3'>Vendor Details:</p>
                        <tbody>
                            <tr>
                                {
                                    vendor.map(vendor => <tr>
                                        <td>Name: {vendor?.name}</td>
                                        <td>Email: {vendor?.email}</td>
                                        <td>Phone: +880{vendor?.phone}</td>
                                        <td>Address: {vendor?.address}</td>
                                        <td>Account Details: {vendor?.account}</td>
                                    </tr>)
                                }
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>

        </div>
    );
};

export default Vendor;