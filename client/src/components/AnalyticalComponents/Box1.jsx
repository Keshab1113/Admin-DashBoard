import React, { useEffect, useState } from 'react'
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';
import Box1Chart from "./Box1Chart"
import Skeleton from '@mui/material/Skeleton';

const Box1 = ({data}) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 150);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className=' w-full h-fit bg-white dark:bg-slate-800 rounded-xl'>
      {loading ? <Skeleton
        sx={{ bgcolor: 'gray.300', borderRadius: '8px', height: '100%', width: '100%', marginTop:"5px" }}
        animation="wave"
        variant="rectangular"
        height={200}
      /> :
        <Box1Chart data={data} />}
    </div>
  )
}

export default Box1
