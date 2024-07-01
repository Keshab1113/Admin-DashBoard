import SettingsIcon from '@mui/icons-material/Settings';
import EditButton from './EditButton';
import { useNavigate } from 'react-router-dom';
import Skeleton from '@mui/material/Skeleton';


const HomePageCards = ({ systems, homeData, loading }) => {
    const navigate = useNavigate();
    return (
    <div className='grid w-full h-full grid-cols-1 gap-4 mt-4 sm:grid-cols-4'>
        {
            loading
                ? Array.from({ length: 4 }).map((_, index) => (
                    <div className='flex flex-col w-full p-5 m-1 mr-4 rounded-lg cursor-pointer bg-white dark:bg-slate-900 dark:text-white sm:mt-1 h-[273px]' key={index}>
                        {[...Array(6)].map((_, idx) => (
                            <Skeleton key={idx} sx={{ bgcolor: 'gray', borderRadius: '8px', height: '100%', width: '100%' }} animation="wave" height={idx === 0 ? 60 : 40} variant={idx === 0 ? "rectangular" : "text"} />
                        ))}
                    </div>
                )) :
                systems.length > 0 ?

                    systems.map((curElem) => {

                        const { deviceId, siteName, machineName, params } = curElem;

                        const filteredData = homeData.filter(item => item.deviceId === deviceId);

                        return (
                            <button onClick={() => navigate(`/live/${deviceId}`)} className='flex flex-col w-full p-[.6rem] m-1 mr-4 rounded-lg cursor-pointer bg-white dark:bg-slate-900 dark:text-white sm:mt-1 h-[293px] border-2  dark:border-gray-800' key={deviceId}>
                                <div className='flex flex-row justify-between w-full gap-4 px-2 py-2 mb-4 text-xl font-semibold rounded-lg bg-slate-100 dark:bg-slate-800'>
                                    <div className='w-full text-left '>
                                        <div className='flex '>
                                            <h2>{machineName}</h2>
                                            <div className='ml-2 text-xs'>
                                                {
                                                    filteredData.map((e, index) => {
                                                        const { isOnline } = e;
                                                        return (
                                                            <div key={index} className={`${isOnline ? 'bg-green-600' : (isOnline === false ? 'bg-red-600' : 'bg-gray-400')} text-white px-1 py-[1px] w-min rounded-lg`}>
                                                                <h1>{isOnline ? 'Online' : (isOnline === false ? 'Offline' : 'Unknown')}</h1>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div >
                                        </div>
                                        <h1 className='text-sm text-slate-500'>{siteName}</h1>
                                    </div>
                                    <div className=' text-black dark:text-white  h-[60%] justify-around flex items-start hover:border hover:bg-slate-300 dark:hover:bg-slate-900 rounded-full'>
                                        <EditButton cardDetails={curElem} />
                                    </div>
                                </div>

                                <div className='flex flex-col justify-between w-full h-4/5 '>
                                    {params.length > 0 ?
                                        params.map((ed) => {
                                            const { id, n, u } = ed;
                                            return (
                                                <div className='flex items-center justify-between w-full' key={`${deviceId}_${id}`}>

                                                    <h1 className='font-sans text-lg'>{n}</h1>
                                                    <div className='flex '>
                                                        {
                                                            filteredData.map((e) => {
                                                                const { deviceId, data } = e;
                                                                return (
                                                                    data.map((elem, index) => {
                                                                        const filterkk = elem[id];
                                                                        return (
                                                                            <h1 className='font-bold' key={`${deviceId}_${id}_${index}`}>{filterkk}</h1>
                                                                        )
                                                                    })
                                                                )
                                                            })
                                                        }
                                                        <h1 className='ml-2 font-bold'>{u}</h1></div>
                                                </div>
                                            )
                                        }) : (<div className='flex items-center justify-between w-full'>

                                            <h2>Device is not configured yet!</h2>

                                        </div>)
                                    }
                                    {
                                        <div className='flex justify-between mt-5 '>
                                            <h1>
                                                Last updated:
                                                {filteredData.map((e, index) => {
                                                    const { lst } = e;
                                                    return lst ? (
                                                        <span key={index}> {lst}</span>
                                                    ) : (
                                                        <span key={index}> NA </span>
                                                    );
                                                })}
                                            </h1>
                                            <SettingsIcon className='cursor-pointer ' />
                                        </div>
                                    }
                                </div>
                            </button>
                        );

                    }) : <div className="items-center justify-center min-h-screen p-1 m-auto ">
                        <div className="p-20 m-auto bg-white rounded-lg shadow-md ">
                            <h1 className="text-xl font-bold">No system found!</h1>

                            <h3 className="text-xs uppercase"></h3>
                            <h2 className="tracking-wide">
                                Add a new system  
                                <br />
                                <button className="px-8 py-3 mt-4 text-sm font-semibold bg-orange-400 rounded hover:bg-opacity-75"> Add New System</button>

                                <br />
                                (Or Contact Administrator)
                            </h2>
                        </div>
                    </div>
        }

    </div>
   
    )
}

export default HomePageCards