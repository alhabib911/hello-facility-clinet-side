import { useEffect, useState } from "react";


const useGallery = () => {
    
    const [gallery, setGallery] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/gallery',{
            method: 'GET',
            headers: {
                'content-type': 'application/json',
            }
        })
        .then(res => res.json())
        .then (data=>setGallery(data))
    },[])
    
    return [gallery, setGallery]
};

export default useGallery;