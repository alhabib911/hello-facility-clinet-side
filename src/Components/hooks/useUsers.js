import { useEffect, useState } from 'react';

const useUsers = () => {
    const [user, setUser] = useState([])
    useEffect(()=>{
        fetch('https://hidden-shelf-50745.herokuapp.com/user',{
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => setUser(data))
    },[])
    return [user, setUser];
};

export default useUsers;