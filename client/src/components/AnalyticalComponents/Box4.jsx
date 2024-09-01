import React, { useEffect, useState } from 'react'
import Box4Chart from "./Box4Chart"
import Skeleton from '@mui/material/Skeleton';

const Box4 = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 4000);

        return () => clearTimeout(timeout);
    }, []);
    return (
        <div className=' w-full h-full bg-white rounded-xl dark:bg-slate-800 '>
            {loading ? <Skeleton
                sx={{ bgcolor: 'gray.300', borderRadius: '8px', height: '100%', width: '100%', marginTop: "5px" }}
                animation="wave"
                variant="rectangular"
                height={200}
            /> :<>
                    <div className=' border-b rounded-t-lg px-4 py-2 dark:border-slate-600 dark:text-white'> <h1 className=' text-2xl font-extrabold'>Pie Chart</h1></div>
                    <Box4Chart />
            </>
                
            }
        </div>
    )
}

export default Box4
