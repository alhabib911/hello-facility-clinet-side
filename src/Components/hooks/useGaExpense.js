import { useEffect, useState } from "react";


const useGaExpense = () => {
    
    const [gaExpense, setGaExpense] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/ga-expense',{
            method: 'GET',
            headers: {
                'content-type': 'application/json',
            }
        })
        .then(res => res.json())
        .then (data=>setGaExpense(data))
    },[])
    
    return [gaExpense, setGaExpense]
};

export default useGaExpense;