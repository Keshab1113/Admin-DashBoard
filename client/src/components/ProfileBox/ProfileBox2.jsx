import React, { useEffect, useState } from 'react'
import SubscriptionTable from "./SubscriptionTable"
import Skeleton from '@mui/material/Skeleton';

const ProfileBox2 = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        // Simulate loading for 5 seconds
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 100);

        return () => clearTimeout(timeout);
    }, []);
  return (
      <div className='sm:w-[50%] w-full bg-white rounded-2xl dark:bg-slate-800 text-white sm:mb-0 shadow-xl shadow-black h-max'>
          {loading ? <Skeleton
              sx={{ bgcolor: 'grey', borderRadius: '8px', height: '100%', width: '100%' }}
              variant="rectangular"
              animation="wave"
          /> : <>
              <div className="flex justify-center w-full pt-4 pb-4 border-b border-black shadow-2xl  h-14 shadow-white dark:shadow-slate-600 dark:border-slate-600">
                  <h1 className=" font-extrabold pb-2 px-6 w-[90%] text-black dark:text-white">
                      Subscription
                  </h1>
              </div>
              <div className=' flex mt-4 px-4'>
                  <h1 className=' text-2xl font-bold mr-4 text-black dark:text-white'>Subscription Status</h1>
                  <button className=' bg-green-400 px-4 rounded-md h-8'>Active</button>
              </div>
              <h1 className='pl-4 text-xl font-bold text-black dark:text-white'>Valid till 2025-07-21</h1>
                  <div className=' px-4 mt-4 hideScrollBar'>
                  <h1 className=' text-xl font-bold text-black dark:text-white'> Payment History</h1>
                  <SubscriptionTable />
              </div>
          </>}
    </div>
  )
}

export default ProfileBox2
