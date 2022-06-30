import { useEffect, useState } from "react";


const useBankBook = () => {
    
    const [bankBook, setBankBook] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/bankbook',{
            method: 'GET',
            headers: {
                'content-type': 'application/json',
            }
        })
        .then(res => res.json())
        .then (data=>setBankBook(data))
    },[])
    
    return [bankBook, setBankBook]
};

export default useBankBook;