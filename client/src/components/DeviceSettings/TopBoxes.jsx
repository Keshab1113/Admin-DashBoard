import React, { useEffect, useState } from 'react'
import IosShareIcon from '@mui/icons-material/IosShare';
import InfoIcon from '@mui/icons-material/Info';
import CheckIcon from '@mui/icons-material/Check';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import Skeleton from '@mui/material/Skeleton';

const TopBoxes = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 150);

        return () => clearTimeout(timeout);
    }, []);
    return (
        <div className=' bg-slate-100 dark:bg-slate-950 sm:h-[25vh] h-full w-full grid sm:grid-cols-4 grid-cols-1 gap-4 justify-center items-center px-4'>
            {loading ? <Skeleton
                sx={{ bgcolor: 'gray.300', borderRadius: '8px', height: '100%', width: '100%' }}
                animation="wave"
                variant="rectangular"
                height={100}
            /> :
                <div className=' bg-white dark:bg-slate-800 dark:text-white h-28 rounded-xl flex flex-col justify-center items-center p-2'>
                    <div className=' w-full flex h-[50%]'>
                        <h1 className=' mr-2 font-semibold'>Selected Device</h1>
                        <IosShareIcon />
                    </div>

                    <select name="cars" id="cars" form="carform" className=' px-4 text-sm bg-white dark:bg-slate-600 outline-none rounded-md h-[50%]'>
                        <option value="volvo" className='bg-white rounded-3xl'>Clean Room Monitoring-SHT20</option>
                        <option value="saab">Others</option>
                    </select>
                </div>
            }
            {loading ? <Skeleton
                sx={{ bgcolor: 'gray.300', borderRadius: '8px', height: '100%', width: '100%' }}
                animation="wave"
                variant="rectangular"
                height={100}
            /> :
                <div className=' bg-white dark:bg-slate-800 dark:text-white h-28 rounded-xl flex flex-col justify-center items-center p-2'>
                    <div className=' w-full flex h-[50%]'>
                        <h1 className='font-semibold'>Basic Device Info</h1>
                    </div>

                    <div className='flex flex-col gap-2 text-white h-[50%] w-full'>
                        <div className=' flex gap-1 '>
                            <h1 className=' bg-violet-700 px-1 text-sm rounded-md'>Name: Clean Room Monitoring-SHT20</h1>
                            <h1 className='bg-green-500 w-max px-1 text-sm rounded-md'>Pune</h1>
                        </div>
                        <h1 className=' bg-blue-500 w-max px-1 text-sm rounded-md'>Raw Data</h1>
                    </div>
                </div>
            }
            {loading ? <Skeleton
                sx={{ bgcolor: 'gray.300', borderRadius: '8px', height: '100%', width: '100%' }}
                animation="wave"
                variant="rectangular"
                height={100}
            /> :
                <div className=' bg-white dark:bg-slate-800 dark:text-white h-28 rounded-xl flex flex-col justify-center items-center p-2'>
                    <div className=' w-full flex mb-4'>
                        <h1 className=' mr-2 font-semibold'>Total Device(s)</h1>
                    </div>
                    <div className=' h-[50%] w-full'>
                        <h1 className=' px-2 bg-violet-600 text-white w-max rounded-md'>5</h1>
                    </div>
                </div>
            }
            {loading ? <Skeleton
                sx={{ bgcolor: 'gray.300', borderRadius: '8px', height: '100%', width: '100%' }}
                animation="wave"
                variant="rectangular"
                height={100}
            /> :
                <div className=' bg-white dark:bg-slate-800 dark:text-white h-28 rounded-xl flex flex-col justify-center items-center p-2'>
                    <div className=' w-full flex h-[50%]'>
                        <h1 className=' mr-2 font-semibold'>Import Parameter Data</h1>
                        <InfoIcon className=' text-blue-700' />
                    </div>
                    <div className='h-[50%] w-[90%] flex gap-2 justify-center items-center'>
                        <select name="cars" id="cars" form="carform" className='h-10 px-4 text-sm bg-white dark:bg-slate-600 outline-none rounded-md w-[90%]'>
                            <option value="volvo" className='bg-white rounded-3xl'>OEE System</option>
                            <option value="saab">Others</option>
                        </select>
                        <KeyboardDoubleArrowRightIcon />
                        <select name="cars" id="cars" form="carform" className='h-10 px-4 text-sm bg-white dark:bg-slate-600 outline-none rounded-md w-[90%]'>
                            <option value="volvo" className='bg-white rounded-3xl'>OEE System</option>
                            <option value="saab">Others</option>
                        </select>
                        <CheckIcon className=' bg-blue-600 text-white rounded-full' />
                    </div>
                </div>
            }
        </div>
    )
}

export default TopBoxes
