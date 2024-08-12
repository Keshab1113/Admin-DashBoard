import React, { useEffect, useState } from 'react'
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';
import Box3Chart from "./Box3Chart"
import Skeleton from '@mui/material/Skeleton';

const Box3 = ({data}) => {
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
                <Box3Chart data={data} />}
        </div>
    )
}

export default Box3
