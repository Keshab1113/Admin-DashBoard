import React, { useEffect, useState } from 'react'
import Box2Chart from "./Box2Chart"
import Skeleton from '@mui/material/Skeleton';

const Box2 = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 150);

        return () => clearTimeout(timeout);
    }, []);
    return (
        <div className=' sm:w-[30%] w-[100%] h-full bg-white rounded-xl dark:bg-slate-800 my-4'>
            {loading ? <Skeleton
                sx={{ bgcolor: 'gray.300', borderRadius: '8px', height: '100%', width: '100%', marginTop: "5px" }}
                animation="wave"
                variant="rectangular"
                height={200}
            /> : <>
                    <div className=' border-b rounded-t-lg px-4 py-2 dark:text-white dark:border-slate-600'> <h1 className=' text-2xl font-extrabold'>Gauge Chart</h1></div>
                    <Box2Chart />
                </>
            }
        </div>
    )
}

export default Box2
