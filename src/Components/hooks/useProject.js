import { useEffect, useState } from "react";


const useProject = () => {
    
    const [project, setProject] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/project',{
            method: 'GET',
            headers: {
                'content-type': 'application/json',
            }
        })
        .then(res => res.json())
        .then (data=>setProject(data))
    },[])
    
    return [project, setProject]
};

export default useProject;