import React, { useEffect, useState } from 'react'
import Box1Chart from "./Box1Chart"
import Skeleton from '@mui/material/Skeleton';

const Box1 = () => {
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
      /> :<>
          <div className=' border-b rounded-t-lg px-4 py-2 dark:text-white dark:border-slate-600'> <h1 className=' text-2xl font-extrabold'>Bar Chart</h1></div>
          <Box1Chart />
      </>
        }
    </div>
  )
}

export default Box1
