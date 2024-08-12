import React, { useEffect, useState } from 'react'
import { Helmet } from "react-helmet";
import MultiOptions from "../../components/HistoricalComponents/MultiOptions"
import EventIcon from '@mui/icons-material/Event';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';
import Chart1 from "../../components/HistoricalComponents/Chart1"
import Chart2 from "../../components/HistoricalComponents/Chart2"
import Skeleton from '@mui/material/Skeleton';


const Historical = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        // Simulate loading for 5 seconds
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 150);

        return () => clearTimeout(timeout);
    }, []);
  return (
      <div className=' mt-[8vh]'>
          <Helmet>
              <meta charSet="utf-8" />
              <title>Historical Page</title>
              <link rel="canonical" href="http://mysite.com/example" />
          </Helmet>
          <div className=' bg-slate-200 dark:bg-slate-900 h-[46vh] w-full p-2'>
              {loading ? <Skeleton
                  sx={{ bgcolor: 'gray.100', borderRadius: '8px', height: '100%', width: '100%' }}
                  animation="wave"
                  variant="rectangular"
                  height={50}
              /> :
                  <div className=' bg-slate-100 dark:bg-slate-600 h-[9vh] w-full px-4 flex items-center justify-between rounded-t-2xl dark:text-white'>
                      <div className=' flex justify-center items-center'>
                          <h1 className=' font-bold'>Historian Plot</h1>
                          <MultiOptions />
                      </div>
                      <div className=' px-4 sm:flex hidden'>
                          <div className=' flex px-6 border rounded-full border-black dark:border-white mr-2'><h1 className=' mr-2'>01-03-2024</h1> <h1 className=' mr-4'>00:00</h1> <EventIcon /></div>
                          <div className=' flex px-6 border rounded-full border-black dark:border-white mr-2'><h1 className=' mr-2'>01-03-2024</h1> <h1 className=' mr-4'>00:00</h1> <EventIcon /></div>
                          <PlayArrowIcon className=' mr-2' />
                          <ZoomOutMapIcon />
                      </div>
                  </div>
              }
              <div className=' bg-white dark:bg-slate-700 h-[35vh] w-full rounded-b-2xl p-4'>
                  {loading ? <Skeleton
                      sx={{ bgcolor: 'gray.100', borderRadius: '8px', height: '100%', width: '100%' }}
                      animation="wave"
                      variant="rectangular"
                      height={170}
                  /> :
                      <Chart2 />
                  }
              </div>
      </div>
          <div className=' bg-slate-200 dark:bg-slate-900 h-[46vh] w-full p-2'>
              {
                  loading ? <Skeleton
                      sx={{ bgcolor: 'gray.100', borderRadius: '8px', height: '100%', width: '100%' }}
                      animation="wave"
                      variant="rectangular"
                      height={50}
                  /> :
                      <div className=' bg-slate-100 dark:bg-slate-600 dark:text-white h-[9vh] w-full px-4 flex items-center justify-between rounded-t-2xl'>
                          <div className=' flex justify-center items-center'>
                              <h1 className=' font-bold'>Datewise Comparision</h1>
                              <MultiOptions />
                          </div>
                          <div className=' px-4 sm:flex hidden'>
                              <div className=' flex px-6 border rounded-full border-black dark:border-white mr-2'><h1 className=' mr-2'>01-03-2024</h1> <h1 className=' mr-4'>00:00</h1> <EventIcon /></div>
                              <div className=' flex px-6 border rounded-full border-black dark:border-white mr-2'><h1 className=' mr-2'>01-03-2024</h1> <h1 className=' mr-4'>00:00</h1> <EventIcon /></div>
                              <PlayArrowIcon className=' mr-2' />
                              <ZoomOutMapIcon />
                          </div>
                      </div>
              }
              <div className=' bg-white dark:bg-slate-700 h-[35vh] w-full rounded-b-2xl p-4'>
                  {loading ? <Skeleton
                      sx={{ bgcolor: 'gray.100', borderRadius: '8px', height: '100%', width: '100%' }}
                      animation="wave"
                      variant="rectangular"
                      height={170}
                  /> :
                      <Chart1 />
                  }
              </div>
      </div>
    </div>
  )
}

export default Historical
