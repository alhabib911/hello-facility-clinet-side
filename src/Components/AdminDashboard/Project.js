import React, { useState } from 'react';
import useProject from '../hooks/useProject';

const Project = () => {
    const [projectDetails, setProjectDetails] = useState([])
    const handelProjectDetails = event => {
        event.preventDefault()
        const name = event.target.name.value
        const email = event.target.email.value
        const phone = event.target.phone.value
        const address = event.target.address.value
        const person = event.target.person.value


        const projectInfo = { name, email, phone, address, person }
        setProjectDetails(projectInfo)

        fetch('http://localhost:5000/project', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(projectInfo)
        })
            .then(res => res.json())
            .then((data) => {
                event.target.reset()
            })

    }

    const [project] = useProject()

    return (
        <div>
            <div>
                <form onSubmit={handelProjectDetails}>
                    <label htmlFor="name">Project Name</label>
                    <input type="text" name='name' placeholder='Project Name' />
                    <label htmlFor="address">Address</label>
                    <input type="text" name='address' placeholder='Project Address' />
                    <label htmlFor="person">Contact Person</label>
                    <input type="text" name='person' placeholder='Contact Person' />
                    <label htmlFor="email">Email</label>
                    <input type="text" name='email' placeholder='Project Email' />
                    <label htmlFor="phone">Phone</label>
                    <input type="number" name="phone" id="" placeholder='Phone Number' />
                    <input type="submit" value="Save" />
                </form>
            </div>
            <div>
                <div class="overflow-x-auto">
                    <table class="table w-full">
                        <p className='mt-10 ml-3'>Project Details:</p>
                        <tbody>
                            <tr>
                                {
                                    project.map(project => <tr>
                                        <td>Name: {project?.name}</td>
                                        <td>Address: {project?.address}</td>
                                        <td>Contact Person: {project?.person}</td>
                                        <td>Email: {project?.email}</td>
                                        <td>Phone: +880{project?.phone}</td>
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

export default Project;