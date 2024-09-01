import React, { useEffect, useState } from 'react'
import Box3Chart from "./Box3Chart"
import Skeleton from '@mui/material/Skeleton';

const Box3 = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 150);

        return () => clearTimeout(timeout);
    }, []);
    return (
        <div className=' w-full h-fit bg-white rounded-xl dark:bg-slate-800 '>
            {loading ? <Skeleton
                sx={{ bgcolor: 'gray.300', borderRadius: '8px', height: '100%', width: '100%', marginTop: "5px" }}
                animation="wave"
                variant="rectangular"
                height={200}
            /> :
                <><div className=' border-b rounded-t-lg px-4 py-2 dark:text-white dark:border-slate-600'> <h1 className=' text-2xl font-extrabold'>Line Chart</h1></div>
                    <Box3Chart />
            </>
            }
        </div>
    )
}

export default Box3
