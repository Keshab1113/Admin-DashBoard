import React, { useEffect, useState } from 'react'
import axios from "axios"
import SettingsIcon from '@mui/icons-material/Settings';
import EditButton from './EditButton';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import Skeleton from '@mui/material/Skeleton';
// import 'react-loading-skeleton/dist/skeleton.css'





const HomePageCharts = ({ data }) => {
  const [realdata, setRealdata] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  

  useEffect(() => {
    const SystemData = async () => {
      try {
        const response2 = await axios.post("http://localhost:5000/api/home/homeData",{},{
          withCredentials: true,
            headers: {
              'Content-Type': 'application/json'
            }
        }
      );
        const data2 = await response2.data.data;
        setRealdata(data2);
      } catch (error) {
        console.log(error);
      }
    }
    SystemData();
    // const interValId = setInterval(() => {
    //   SystemData();
    // }, 5000);
    // return () => clearInterval(interValId);
  }, []);

  useEffect(() => {
    // Simulate loading for 5 seconds
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timeout);
  }, []);



  return (
    <div className='grid w-full h-full grid-cols-1 gap-4 mt-4 sm:grid-cols-4' >
      {
        
        data.map((curElem) => {

          const { deviceId, siteName, machineName, params } = curElem;
          const filteredData = realdata.filter(item => item.deviceId === deviceId);

          return (
            <button onClick={() => navigate(`/live/${deviceId}`)} className='flex flex-col w-full p-5 m-1 mr-4 rounded-lg cursor-pointer bg-slate-200 dark:bg-slate-900 dark:text-white sm:mt-1' key={deviceId}>
              {loading ? <Skeleton
                sx={{ bgcolor: 'gray', borderRadius: '8px', height: '100%', width: '100%' }}
                animation="wave"
                variant="rectangular"
                height={100}
              /> :
                <div className='flex flex-row justify-between w-full gap-4 px-4 py-2 mb-4 text-xl font-semibold rounded-lg bg-slate-100 dark:bg-slate-800'>
                  <div className='w-full text-left '>
                    <div className='flex '>
                    <h2>{machineName}</h2>
                    <div className='ml-2 text-xs '>
                      {
                        // loading ? <Skeleton
                        //   sx={{ bgcolor: 'grey', height: '100%', width: '100%' }}
                        //   animation="wave"
                        // /> :
                          filteredData.map((e) => {
                            const { deviceId, lst, data, isOnline } = e;
                            return (
                              <h1>{isOnline ? <div className=' bg-[#17a817] text-white px-2 py-1 w-max rounded-lg'> <h1>Active</h1></div> : <div className='px-2 py-1 text-white bg-red-600 rounded-lg w-max'><h1>Offline</h1></div>}</h1>
                            )
                          })
                      }
                      </div>
                    </div>
                    <h1>{siteName}</h1>
                  </div>
                  <div className=' text-black dark:text-white  h-[60%] justify-around flex items-start hover:border hover:bg-slate-300 dark:hover:bg-slate-900 rounded-full'>
                    <EditButton cardDetails={curElem}/>
                  </div>
                </div>
              }
              <div className='flex flex-col justify-between w-full h-4/5 '>
                {params.map((ed) => {
                  const { id, n, u } = ed;
                  return loading ? <Skeleton
                    sx={{ bgcolor: 'gray' }}
                    animation="wave"
                  /> : 
                  (
                     <div className='flex items-center justify-between w-full' key={`${deviceId}_${id}`}>

                        <h1 className='font-bold '>{n}</h1>
                        <div className='flex '>
                          {
                            filteredData.map((e) => {
                              const { deviceId, lst, data, isOnline } = e;
                              return (
                                data.map((elem) => {
                                  const filterkk = elem[id];
                                  return (
                                    <h1 className='font-bold' key={deviceId}>{loading ? <Skeleton count={1} /> : filterkk}</h1>
                                  )
                                })
                              )
                            })
                          }
                          <h1 className='ml-2 font-bold'>{loading ? <Skeleton count={1} /> : u}</h1></div>
                      </div>
                    
                    
                  )
                })}
                {loading ? <Skeleton
                  sx={{ bgcolor: 'grey', width: '100%' }}
                  animation="wave"
                /> :
                  <div className='flex justify-between mt-5 '>
                    <h1>Last updated:
                      {loading ? <Skeleton
                        sx={{ bgcolor: 'grey' }}
                      
                      /> :
                        filteredData.map((e) => {
                          const { deviceId, lst, data, isOnline } = e;
                          return (
                            <h1>{lst}</h1>
                          )
                        })
                      } </h1>
                    <SettingsIcon className='cursor-pointer ' />
                  </div>
                }
              </div>
            </button>
          );

        })
      }

    </div>
  )
}

export default HomePageCharts