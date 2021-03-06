import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';


const useUpdateUser = () => {
    const [user] = useAuthState(auth)
    const {email} =user
    // console.log(user);
    const [updateUser, setUpdateUser] = useState({})
    useEffect(()=>{
        fetch(`https://hidden-shelf-50745.herokuapp.com/user/${email}`,{
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(res => res.json())
        .then (data=>setUpdateUser(data))
    },[])
    return [updateUser, setUpdateUser];
};

export default useUpdateUser;