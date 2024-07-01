"use client";
import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import EastIcon from '@mui/icons-material/East';
import { Helmet } from "react-helmet";
import { useDispatch } from 'react-redux';
import { login } from '../../features/userSlice';
import axios from 'axios';
import { Spinner } from "flowbite-react";
import {  Label, TextInput } from "flowbite-react";


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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post('http://localhost:5000/api/auth/login',
                {
                    email: user.email,
                    password: user.password,
                },
                {
                    withCredentials: true,
                    credentials: 'include',
                }
            );
            if (response.statusText == 'OK') {

                if (response.data.success) {
                    setUser({
                        email: "",
                        password: "",
                    });
                    dispatch(login(response.data.user));
                    navigate("/");
                } else {
                    setErrMsg(response.data.msg);
                }
            } else {
                console.log("object")
            }
        } catch (error) {
            setErrMsg(`${error.message}. Please try again later.`);
        } finally {
            setLoading(false);
        }
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000, // Change the speed as needed
    };

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
                    <TextInput
                        required
                        id="outlined-required"
                        label="Email"
                        className='w-full rounded-md dark:bg-white border-none outline-none'
                        name='email'
                        placeholder="youremail@gmail.com"
                        value={user.email}
                        onChange={handleInput}
                    />
                    
                </div>
                <div className=' w-[90%] '>
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
            <div className=' w-[75%] bg-slate-200 sm:flex hidden overflow-hidden justify-center items-center'>
                <Slider {...settings} className=' w-full h-full mx-10'>
                    <div className='relative w-full h-full '>
                        <div className='absolute w-[50%] pl-20 pt-5'>
                            <h1 className='pb-10 text-3xl font-bold capitalize '>Heading of the login page and it is the demo heading</h1>
                            <h3 className='text-xl font-semibold '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error incidunt, vero laborum asperiores laboriosam blanditiis esse harum expedita voluptatum, facere quam eos, libero dolorum deleniti molestias architecto excepturi optio aliquid?</h3>
                            <button className='flex items-center justify-center mt-4 '><h1 className='mr-4 border-b-2 border-black '>Learn more</h1><EastIcon className='text-sm ' /></button>
                        </div>
                        <img src="https://png.pngtree.com/background/20220729/original/pngtree-vector-illustration-hi-tech-digital-technology-design-colorful-on-circuit-board-picture-image_1866785.jpg" alt="..." className='w-full h-full ' />
                    </div>
                    <div className='relative w-full h-full '>
                        <div className='absolute w-[50%] pl-20 pt-5'>
                            <h1 className='pb-10 text-3xl font-bold capitalize '>Heading of the login page and it is the demo heading</h1>
                            <h3 className='text-xl font-semibold '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error incidunt, vero laborum asperiores laboriosam blanditiis esse harum expedita voluptatum, facere quam eos, libero dolorum deleniti molestias architecto excepturi optio aliquid?</h3>
                            <button className='flex items-center justify-center mt-4 '><h1 className='mr-4 border-b-2 border-black '>Learn more</h1><EastIcon className='text-sm ' /></button>
                        </div>
                        <img src="https://img.freepik.com/free-vector/white-technology-background_23-2148403821.jpg" alt="..." className='w-full h-full ' />
                    </div>
                    <div className='relative w-full h-full '>
                        <div className='absolute w-[50%] pl-20 pt-5'>
                            <h1 className='pb-10 text-3xl font-bold capitalize '>Heading of the login page and it is the demo heading</h1>
                            <h3 className='text-xl font-semibold '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error incidunt, vero laborum asperiores laboriosam blanditiis esse harum expedita voluptatum, facere quam eos, libero dolorum deleniti molestias architecto excepturi optio aliquid?</h3>
                            <button className='flex items-center justify-center mt-4 '><h1 className='mr-4 border-b-2 border-black '>Learn more</h1><EastIcon className='text-sm ' /></button>
                        </div>
                        <img src="https://img.freepik.com/free-vector/white-technology-background_23-2148403821.jpg" alt="..." className='w-full h-full ' />
                    </div>
                    <div className='relative w-full h-full '>
                        <div className='absolute w-[50%] pl-20 pt-5'>
                            <h1 className='pb-10 text-3xl font-bold capitalize '>Heading of the login page and it is the demo heading</h1>
                            <h3 className='text-xl font-semibold '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error incidunt, vero laborum asperiores laboriosam blanditiis esse harum expedita voluptatum, facere quam eos, libero dolorum deleniti molestias architecto excepturi optio aliquid?</h3>
                            <button className='flex items-center justify-center mt-4 '><h1 className='mr-4 border-b-2 border-black '>Learn more</h1><EastIcon className='text-sm ' /></button>
                        </div>
                        <img src="https://png.pngtree.com/background/20220729/original/pngtree-vector-illustration-hi-tech-digital-technology-design-colorful-on-circuit-board-picture-image_1866785.jpg" alt="..." className='w-full h-full ' />
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default Login