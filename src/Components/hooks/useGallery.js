import { useEffect, useState } from "react";


const useGallery = () => {
    
    const [gallery, setGallery] = useState([])
    useEffect(()=>{
        fetch('https://hidden-shelf-50745.herokuapp.com/gallery',{
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