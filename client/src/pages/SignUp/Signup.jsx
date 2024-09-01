"use client";
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from "react-helmet";
import { useDispatch } from 'react-redux';
import { Spinner } from "flowbite-react";
import { Label, TextInput } from "flowbite-react";
import Banner from '../../components/LoginAndSignupBanner/Banner';
import { register } from '../../features/userSlice';

const Signup = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);

    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
    });

    const [errMsg, setErrMsg] = useState('');

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/auth/signup`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type":"application/json",
                    },
                    body: JSON.stringify(user),
                });
            const res_data = await response.json();
            if (response.ok) {
                dispatch(register({ user: res_data.userDetails, token: res_data.token, isLogedin: true }));
                    setUser({
                        username: "",
                        email: "",
                        password: "",
                    });
                    navigate("/");
            } else {
                setErrMsg(res_data.extraDetails ? res_data.extraDetails : res_data.message);
            }
        } catch (error) {
            setErrMsg(`${error.message}. Please try again later.`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='h-[100vh] flex justify-start bg-white dark:bg-slate-950'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Signup Page | </title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <form onSubmit={handleSubmit} className='border h-full sm:w-[25%] w-[100%] flex flex-col justify-center items-center shadow bg-slate-100 dark:bg-slate-900 dark:border-slate-950'>
                <h1 className='mb-5 text-3xl font-bold text-center text-blue-700 dark:text-white'>Create a new account</h1>
                <div className='w-[90%] mb-6'>
                    <h1 className='mb-4 text-lg font-bold dark:text-white'>Enter Username</h1>
                    <TextInput
                        required
                        id="outlined-required"
                        label="Username"
                        className='w-full rounded-md dark:bg-white border-none outline-none'
                        name='username'
                        placeholder="YourUsername"
                        value={user.username}
                        onChange={handleInput}
                    />
                </div>
                <div className='w-[90%] mb-6'>
                    <h1 className='mb-4 text-lg font-bold dark:text-white'>Enter Email Address</h1>
                    <TextInput
                        required
                        id="outlined-email-required"
                        label="Email"
                        className='w-full rounded-md dark:bg-white border-none outline-none'
                        name='email'
                        placeholder="youremail@gmail.com"
                        value={user.email}
                        onChange={handleInput}
                    />
                </div>
                <div className='w-[90%]'>
                    <h1 className='mb-4 text-lg font-bold dark:text-white'>Enter Your Password</h1>
                    <TextInput
                        required
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        placeholder="YourPassword"
                        autoComplete="current-password"
                        className='w-full rounded-md dark:bg-white'
                        name='password'
                        value={user.password}
                        onChange={handleInput}
                    />
                </div>
                <div className='w-[90%] mt-4'>
                    <h1 className='mb-4 font-semibold text-red-700 cursor-pointer dark:text-red hover:dark:text-slate-500 w-max'>{errMsg}</h1>
                </div>
                {
                    loading ? <Button variant="outlined" sx={{ 'BackgroundColor': 'white' }} disabled>Signup...<Spinner /></Button> :
                        <Button variant="outlined" type='submit' sx={{ 'BackgroundColor': 'white' }}>Signup</Button>
                }
                <div className='w-[90%] mt-4'>
                    <Link to={'/login'} className='font-semibold hover:text-blue-700 dark:text-white hover:dark:text-slate-500'>
                        <button>Already have an account?</button>
                    </Link>
                </div>
            </form>
            <Banner />
        </div>
    );
};

export default Signup;
