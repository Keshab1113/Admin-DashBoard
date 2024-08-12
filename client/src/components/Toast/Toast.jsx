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
            className=" absolute z-[999999] w-fit text-center top-2 right-2"
        >
            <div className={`p-3 rounded-lg shadow-xl shadow-black ${type === 'error'
            ? 'bg-red-500 text-white'
            : type === 'success'
                    ? 'bg-[#17a817] text-white'
            : 'bg-blue-500 text-white'
                } ${show ? 'opacity-100' : 'opacity-0 transition-opacity duration-300 ease-in-out'}`}>
                {message}
            </div>
        </div>
    );
};

export default Toast;
