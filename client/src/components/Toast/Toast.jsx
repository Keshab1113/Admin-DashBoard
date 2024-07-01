import React, { useState, useEffect } from 'react';

const Toast = ({ message, type, duration = 3000 }) => {
    const [show, setShow] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(false);
        }, duration);

        return () => {
            clearTimeout(timer);
        };
    }, [duration]);

    return (
        <div
            className="fixed z-10 flex justify-center w-full text-center bottom-10" 
        >
            <div className={`p-3 rounded-lg shadow-xl shadow-black ${type === 'error'
            ? 'bg-red-500 text-white'
            : type === 'success'
            ? 'bg-green-500 text-white'
            : 'bg-blue-500 text-white'
                } ${show ? 'opacity-100' : 'opacity-0 transition-opacity duration-300 ease-in-out'}`}>
                {message}
            </div>
        </div>
    );
};

export default Toast;
