import React from 'react';

const Vendors = (props) => {
    const { _id,  name, email, phone, address, account } = props.vendor
    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th>Account Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>{name}</th>
                            <td>{email}</td>
                            <td>{phone}</td>
                            <td>{address}</td>
                            <td>{account}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Vendors;