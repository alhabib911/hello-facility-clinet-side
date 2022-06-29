// import { useEffect, useState } from "react";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { useParams } from "react-router-dom";
// import auth from "../firebase.init";


// const useUpdateEmployee = () => {
//     const { id } = useParams()
//     const [user] = useAuthState(auth)
//     // const {email} =user
//     // console.log(user);
//     const [updateEmployee, setUpdateEmployee] = useState({})
//     useEffect(()=>{
//         fetch(`http://localhost:5000/employee/${id}`,{
//             method: 'GET',
//             headers: {
//                 'content-type': 'application/json'
//             }
//         })
//         .then(res => res.json())
//         .then (data=>setUpdateEmployee(data))
//     },[])
//     return [updateEmployee, setUpdateEmployee];
// };

// export default useUpdateEmployee;