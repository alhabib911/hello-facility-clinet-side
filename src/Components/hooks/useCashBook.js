import { useEffect, useState } from "react";


const useCashBook = () => {
    
    const [cashBook, setCashBook] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/cashbook',{
            method: 'GET',
            headers: {
                'content-type': 'application/json',
            }
        })
        .then(res => res.json())
        .then (data=>setCashBook(data))
    },[])
    
    return [cashBook, setCashBook]
};

export default useCashBook;