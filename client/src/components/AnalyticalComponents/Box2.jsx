import React, { useEffect, useState } from 'react'
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';
import Box2Chart from "./Box2Chart"
import Skeleton from '@mui/material/Skeleton';

const Box2 = ({data}) => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 150);

        return () => clearTimeout(timeout);
    }, []);
    return (
        <div className=' w-fit h-fit bg-white rounded-xl dark:bg-slate-800  '>
            {loading ? <Skeleton
                sx={{ bgcolor: 'gray.300', borderRadius: '8px', height: '100%', width: '100%', marginTop: "5px" }}
                animation="wave"
                variant="rectangular"
                height={200}
            /> :
                <Box2Chart data={data} />}
        </div>
    )
}

export default Box2
