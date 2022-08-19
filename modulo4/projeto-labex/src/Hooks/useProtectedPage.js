import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const useProtectedPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token")

        console.log(token)
        if(token === null){
            navigate("/login")
        }
        console.log(token)
    },[navigate])
    
}