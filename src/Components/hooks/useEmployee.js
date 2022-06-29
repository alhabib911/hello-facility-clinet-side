import { useEffect, useState } from "react";


const useEmployee = () => {
    
    const [employee, setEmployee] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/employee',{
            method: 'GET',
            headers: {
                'content-type': 'application/json',
            }
        })
        .then(res => res.json())
        .then (data=>setEmployee(data))
    },[])
    
    return [employee, setEmployee]
};

export default useEmployee;