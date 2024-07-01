// src/components/ProgressBar.js
import React from 'react';
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Customize the nprogress bar style
nprogress.configure({ showSpinner: false });

const ProgressBar = () => {
    const location = useLocation();

    useEffect(() => {
        const handleStart = () => nprogress.start();
        const handleStop = () => nprogress.done();

        handleStart();
        handleStop();

        return () => {
            handleStop();
        };
    }, [location]);

    return null;
};

export default ProgressBar;
