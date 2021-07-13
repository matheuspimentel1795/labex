import { useState, useEffect } from "react";
import axios from "axios";

export const useRequestData = (url,id)=>{
    const [arrayViagens,setArrayViagens]=useState([])
    const [isLoading,setIsLoading]=useState(false)
    const [error, setError] = useState("");
    useEffect(()=>{
        setIsLoading(true)
        axios.get(url)
        .then((res)=>{
            setArrayViagens(res.data.trips)
            setIsLoading(false)
        })
        .catch((err)=>{
            setError(err)
            setIsLoading(false)
        })
    },[url,id])
    return [arrayViagens,isLoading,error]
}
