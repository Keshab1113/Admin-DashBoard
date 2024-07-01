import React, { useEffect } from 'react';
import { Navigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { logout } from '../../features/userSlice';
import axios from "axios";
const Logout = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        async function handleLogout(){ 
        try {
            const response = await axios.post('http://localhost:5000/api/auth/logout', {}, {
                withCredentials: true, 
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(response,19)
            if (response.status === 200) {
                console.log("19 logout")
                dispatch(logout());
                return <Navigate to="/login" replace />;
            } else {
                console.error('Logout failed:', response.data);
                alert("Logout failed...");
            }
        } catch (error) {
            console.error('Logout error:', error);
            return false;
        }
    }
    handleLogout();
    },[dispatch]);
   
};
export  default Logout;