import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from "react-helmet";
import { useDispatch } from 'react-redux';
import { login } from '../../features/userSlice';
import axios from 'axios';
import { Spinner } from "flowbite-react";
import Banner from '../../components/LoginAndSignupBanner/Banner';


const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);

    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const [errMsg, setErrMsg] = useState('')

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name]: value,
        })
    }
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/auth/login`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(user),
                },
            );
            const res_data = await response.json();
            if (response.ok) {
                dispatch(login({ user: res_data.userDetails, token: res_data.token, isLogedin:true }));
                    setUser({
                        email: "",
                        password: "",
                    });
                navigate("/");
                } else {
                setErrMsg(res_data.extraDetails ? res_data.extraDetails : res_data.message)
            }
        } catch (error) {
            setErrMsg(`${error.message}. Please try again later.`);
        } finally {
            setLoading(false);
        }
    }

    

    return (
        <div className=' h-[100vh] flex justify-start bg-white dark:bg-slate-950'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Login Page | </title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <form onSubmit={handleSubmit} className=' border h-full sm:w-[25%] w-[100%] flex flex-col justify-center items-center shadow bg-slate-100 dark:bg-slate-900 dark:border-slate-950'>
                <h1 className='mb-5 text-3xl font-bold text-center text-blue-700 dark:text-white'>Log in to your account</h1>
                <div className=' w-[90%] mb-6'>
                    <h1 className='mb-4 text-lg font-bold dark:text-white'>Enter Email Address</h1>
                    <input
                        type="email"
                        id="email"
                        name='email'
                        value={user.email}
                        onChange={handleInput}
                        placeholder="Enter your email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    
                </div>
                <div className=' w-[90%] '>
                    <h1 className='mb-4 text-lg font-bold dark:text-white'>Enter Your Password</h1>
                    <div className="relative w-full">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={user.password}
                            onChange={handleInput}
                            name='password'
                        />
                        <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className="absolute inset-y-0 right-0 flex items-center pr-3"
                        >
                            {showPassword ? (
                                <span role="img" aria-label="Hide password" className="text-gray-600">🙈</span>
                            ) : (
                                <span role="img" aria-label="Show password" className="text-gray-600">👁️</span>
                            )}
                        </button>
                    </div>
                </div>
                <div className=' w-[90%] mt-4'>
                    <h1 className='mb-4 font-semibold text-red-700 cursor-pointer dark:text-red hover:dark:text-slate-500 w-max'>{errMsg}</h1>
                </div>
                <div className=' w-[90%] mt-4'>
                    <h1 className='mb-4 font-semibold text-blue-700 cursor-pointer dark:text-white hover:dark:text-slate-500 w-max'>Forgot Password?</h1>
                </div>
                {
                    loading ? <Button variant="outlined" sx={{ 'BackgroundColor': 'white' }} disabled>Login...<Spinner /></Button> :
                        <Button variant="outlined" type='submit' sx={{ 'BackgroundColor': 'white' }}>Login</Button>
                }
                <div className='w-[90%] mt-4'>
                    <Link to={'/signup'} className='font-semibold hover:text-blue-700 dark:text-white hover:dark:text-slate-500'>
                        <button>Create a new account?</button>
                    </Link>
                </div>
            </form>
            <Banner/>
        </div>
    )
}

export default Login