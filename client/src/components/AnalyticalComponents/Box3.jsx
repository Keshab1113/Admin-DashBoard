import React, { useEffect, useState } from 'react'
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';
import Box3Chart from "./Box3Chart"
import Skeleton from '@mui/material/Skeleton';

const Box3 = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        // Simulate loading for 5 seconds
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 4000);

        return () => clearTimeout(timeout);
    }, []);
    return (
        <div className=' w-[100%] h-[42vh] bg-white rounded-xl dark:bg-slate-800'>
            {
                loading ? <Skeleton
                    sx={{ bgcolor: 'gray.300', borderRadius: '8px', height: '100%', width: '100%' }}
                    animation="wave"
                    variant="rectangular"
                    height={50}
                /> :
                    <div className=' bg-slate-200 dark:bg-slate-700 h-14 shadow-xl shadow-slate-300 dark:shadow-slate-600 px-4 flex justify-between items-center rounded-t-xl dark:text-white'>
                        <h1 className=' font-bold'>Bar Chart</h1>
                        <ZoomOutMapIcon />
                    </div>}
            {loading ? <Skeleton
                sx={{ bgcolor: 'gray.300', borderRadius: '8px', height: '100%', width: '100%', marginTop: "5px" }}
                animation="wave"
                variant="rectangular"
                height={200}
            /> :
                <Box3Chart />}
        </div>
    )
}

export default Box3
