import { useEffect, useState } from "react";


const useEmployee = () => {
    
    const [employee, setEmployee] = useState([])
    useEffect(()=>{
        fetch('https://hidden-shelf-50745.herokuapp.com/employee',{
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