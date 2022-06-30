import { useEffect, useState } from "react";


const useDirectExpense = () => {
    
    const [directExpense, setDirectExpense] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/direct-expense',{
            method: 'GET',
            headers: {
                'content-type': 'application/json',
            }
        })
        .then(res => res.json())
        .then (data=>setDirectExpense(data))
    },[])
    
    return [directExpense, setDirectExpense]
};

export default useDirectExpense;