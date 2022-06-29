import React from 'react';
import useUsers from '../hooks/useUsers';
import UserRow from './UserRow';

const UserStatus = () => {
    const [user] = useUsers()
    console.log(user);
    return (
        <div>
             <div>
            <h2>Total Users: {user?.length} </h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Admin</th>
                            <th>Accounts</th>
                            <th>Remove Button</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        {
                            user.map(user => <UserRow
                                key={user?._id}
                                user={user}
                            ></UserRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
        </div>
    );
};

export default UserStatus;