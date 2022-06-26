import { useEffect, useState } from "react";


const useBlog = () => {
    
    const [blog, setBlog] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/blog',{
            method: 'GET',
            headers: {
                'content-type': 'application/json',
            }
        })
        .then(res => res.json())
        .then (data=>setBlog(data))
    },[])
    
    return [blog, setBlog]
};

export default useBlog;