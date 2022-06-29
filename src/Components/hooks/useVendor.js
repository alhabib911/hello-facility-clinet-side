import { useEffect, useState } from "react";


const useVendor = () => {
    
    const [vendor, setVendor] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/vendor',{
            method: 'GET',
            headers: {
                'content-type': 'application/json',
            }
        })
        .then(res => res.json())
        .then (data=>setVendor(data))
    },[])
    
    return [vendor, setVendor]
};

export default useVendor;