import React, { useState } from 'react';
import useEmployee from '../hooks/useEmployee';
import './Employee.css'
import Employess from './Employess';

const Employee = () => {
    const [employeeDetails, setDetailsEmployee] = useState([])

    const handelemployeeDetails = event => {
        event.preventDefault()
        const name = event.target.name.value
        const email = event.target.email.value
        const phone = event.target.phone.value
        const address = event.target.address.value
        const id = event.target.id.value
        const date = event.target.date.value
        const position = event.target.position.value
        const salary = event.target.salary.value


        const employeeDetails = { name, email, phone, address, id, date, position, salary }
        setDetailsEmployee(employeeDetails)
        // console.log(booking);

        fetch('http://localhost:5000/employee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(employeeDetails)
        })
            .then(res => res.json())
            .then((data) => {
                event.target.reset()
                window.location.reload();
            })

    }

    const [employee] = useEmployee()
    console.log(employee);
    return (
        <div className='employee-input-area'>
            <h2 className='employee-list-title'>Hello Facility Employee List</h2>
            <div className="em-container">
                <div className="em-list-area">
                    {
                        employee.map(employee => <Employess
                            employee={employee}
                        ></Employess>)
                    }
                </div>

                <div className="em-area-field">
                    <form onSubmit={handelemployeeDetails} className="employee-input-field">
                        <div className="em-field">
                            <div className="em">
                                <label htmlFor="name">Name:</label>
                                <input type="text" placeholder='Name' name="name" required />
                            </div>
                            <div className="em">
                                <label htmlFor="email">Email:</label>
                                <input type="email" placeholder='Email' name="email" />
                            </div>
                            <div className="em">
                                <label htmlFor="phone">Phone Number:</label>
                                <input type="text" placeholder='Phone Number' name="phone" required />
                            </div>
                            <div className="em">
                                <label htmlFor="address">Address:</label>
                                <input type="text" placeholder='Address' name="address" required />
                            </div>
                            <div className="em">
                                <label htmlFor="id">HF ID:</label>
                                <input type="text" placeholder='HF ID' name="id" required />
                            </div>
                            <div className="em">
                                <label htmlFor="date">Joining Date:</label>
                                <input type="date" placeholder='Joining Date' name="date" required />
                            </div>
                            <div className="em">
                                <label htmlFor="position">Position:</label>
                                <input type="text" placeholder='Position' name="position" required />
                            </div>
                            <div className="em">
                                <label htmlFor="salary">Salary:</label>
                                <input type="text" placeholder='Salary' name="salary" required />
                            </div>
                        </div>
                        <div className="add-employee-btn">
                            <input type="submit" value="Add Employee" />
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Employee;