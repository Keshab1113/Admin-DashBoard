import React from 'react';
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

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
