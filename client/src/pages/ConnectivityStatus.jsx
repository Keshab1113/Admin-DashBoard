import React, { useState, useEffect } from 'react';

const ConnectivityStatus = () => {
    const [isOnline, setIsOnline] = useState(navigator.onLine);

    useEffect(() => {
        const handleOnline = () => {
            setIsOnline(true);
            showAlert('You are back online!', 'bg-green-500');
        };

        const handleOffline = () => {
            setIsOnline(false);
            showAlert('You are offline!', 'bg-red-500');
        };

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []);

    const showAlert = (message, bgColor) => {
        const alert = document.createElement('div');
        alert.className = `${bgColor} text-white px-4 py-2 rounded fixed top-4 left-1/2 transform -translate-x-1/2 z-50 shadow-lg`;
        alert.textContent = message;

        document.body.appendChild(alert);

        setTimeout(() => {
            document.body.removeChild(alert);
        }, 3000);
    };

    return null; // This component doesn't render anything visible
};

export default ConnectivityStatus;
