import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import './Employee.css'

const Employess = (props) => {
    const navigete = useNavigate()
    const handleUpdateEmployee = (_id) => {
        navigete ( `/dashboard/employee/${_id}`)
    }
    const { _id, name, phone, address, date, email, id, position, salary } = props.employee
    return (
        <div className='employee-area'>

            <div className="employee-details">
                Name: {name} <br />
                Email: {email} <br />
                Phone Number: {phone} <br />
                Address: {address} <br />
                Joining Date: {date} <br />
                HF Id: {id} <br />
                Position: {position} <br />
                Salary: {salary}
                <div className="update-employee-btn">
                <button onClick={() => handleUpdateEmployee (_id)} type="submit"><small>Update Employee</small></button>
                </div>
            </div>
        </div>
    );
};

export default Employess;