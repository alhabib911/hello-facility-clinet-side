import React from 'react';
import { useParams } from 'react-router-dom';
import useEmployee from '../hooks/useEmployee';
import { useForm } from 'react-hook-form';
import './EmployeeUpdate.css'

const EmployeeUpdate = () => {
    const { id } = useParams()
    const [employee, setEmployee] = useEmployee()
    const singleEmployee = employee.find((employee) => employee._id == id)
    console.log(singleEmployee);


    const handelUpdateEmployee = event => {
        event.preventDefault()
        const name = event.target.name.value
        const email = event.target.email.value
        const phone = event.target.phone.value
        const address = event.target.address.value
        const date = event.target.date.value
        const position = event.target.position.value
        const salary = event.target.salary.value



        const updateEmployee = { name, email, phone, address, date, position, salary }



        const url = `https://hidden-shelf-50745.herokuapp.com/employee/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                // authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(updateEmployee)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                // toast('Quantity Updated');
                // window.location.reload();
                event.target.reset()
            })
    }

  

    return (
        <div>
            <form className='employee-update-form' onSubmit={handelUpdateEmployee}>
                <div className='single-employee-edit'>
                    <div>
                        <label htmlFor="name">Employee Name</label> <br />
                        <input defaultValue={singleEmployee?.name} type="text" name="name" id="" />
                    </div>
                    <div>
                        <label htmlFor="email">Employee Email</label> <br />
                        <input className='em-email-update' defaultValue={singleEmployee?.email} type="email" name="email" id="" readOnly />
                    </div>
                    <div>
                        <label htmlFor="phone">Employee Phone</label> <br />
                        <input defaultValue={singleEmployee?.phone} type="number" name="phone" id="" />
                    </div>
                    <div>
                        <label htmlFor="address">Employee Address</label> <br />
                        <input defaultValue={singleEmployee?.address} type="text" name="address" id="" />
                    </div>
                    <div>
                        <label htmlFor="date">Joining Date</label> <br />
                        <input defaultValue={singleEmployee?.date} type="date" name="date" id="" />
                    </div>
                    <div>
                        <label htmlFor="position">Designation</label> <br />
                        <input defaultValue={singleEmployee?.position} type="text" name="position" id="" />
                    </div>
                    <div>
                        <label htmlFor="salary">Salary</label> <br />
                        <input defaultValue={singleEmployee?.salary} type="number" name="salary" id="" />
                    </div>

                </div>
                <div className="save-update-btn">
                    <input className='update-employee' type="submit" value="Save Change" />
                </div>
            </form>
        </div>
    );
};

export default EmployeeUpdate;