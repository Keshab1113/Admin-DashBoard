import React, { useEffect, useState } from 'react'
import axios from "axios"
import HomePageBox from '../../components/HomePageBox/HomePageBox'
// import HomePageCharts from '../../components/HomePageCharts/HomePageCharts'
import HomePageCards from '../../components/HomePageCharts/HomePageCards'
import AddIcon from '@mui/icons-material/Add';
import { Helmet } from "react-helmet";
// import LoadingPage from "../../components/LoadingPage/LoadingPage"
import { useSelector } from 'react-redux';
import AddSystem from '../AddSystem/AddSystem';
import Modal from '@mui/material/Modal';
import Typography from "@mui/material/Typography";
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from 'react-redux';
import { fetched } from '../../features/systemSlice';
// import ConnectivityStatus from '../ConnectivityStatus'


const Home = () => {
  const dispatch = useDispatch();
  // const [systems, setSystems] = useState(null);
  

  const user = useSelector((state) => state.user.user);
  const systems = useSelector((state) => state.system.systems);

  const [homeData, setHomeData] = useState(null);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [total, setTotal] = useState(0);
  const [online, setOnline] = useState(0);
  const [offline, setOffline] = useState(0);
  const [unknown, setUnknown] = useState(0);
 
 

  useEffect(() => {
    const getSystems = async () => {
      try {
        const response = await axios.post("http://localhost:5000/api/home/systems", {},
          {
            withCredentials: true,
            headers: {
              'Content-Type': 'application/json'
            }
          });
        const data = await response.data.sys;
        dispatch(fetched(response.data.sys));
        // setSystems(data);

        setTotal(data.length)
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false)
      }
    }
    getSystems();
  }, [dispatch]);


  useEffect(() => {
    if (systems) {
      console.log("in use effect 2")
      const getHomeData = async () => {
        try {

          const response2 = await axios.post("http://localhost:5000/api/home/homeData", {}, {
            withCredentials: true,
            headers: {
              'Content-Type': 'application/json'
            }
          }
          );
          const data2 = await response2.data.data;
          setHomeData(data2);


          const { onlineCount, offlineCount, unknownCount } = data2.reduce(
            (counts, device) => {
              const { isOnline } = device;
              return {
                onlineCount: counts.onlineCount + (isOnline === 1 ? 1 : 0),
                offlineCount: counts.offlineCount + (isOnline === 0 ? 1 : 0),
                unknownCount: counts.unknownCount + (isOnline !== 0 && isOnline !== 1 ? 1 : 0)
              };
            },
            { onlineCount: 0, offlineCount: 0, unknownCount: 0 }
          );

          setOnline(onlineCount);
          setOffline(offlineCount);
          setUnknown(unknownCount);


        } catch (error) {
          console.log(error);
        }
      }
      getHomeData();
      const interValId = setInterval(() => {
        getHomeData();
      }, 15000);
      return () => clearInterval(interValId);
    }

  }, [systems]);



  return (
    <div className=' bg-slate-200 dark:bg-slate-950 w-full h-full justify-center items-center px-5 float-end pt-[9vh]  pb-20 overflow-y-scroll'>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home Page |  All Your systems |</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <div className='flex-col justify-between sm:flex sm:flex-row'>
        <div>
          <div className='flex text-2xl font-semibold text-black dark:text-white'>  <h1>Hii, {user ? user.user : "User"}</h1></div>
          <h2 className='text-base text-slate-600 dark:text-slate-400'>Hey, Here are your all systems.</h2>
        </div>
        <div className=' sm:flex flex justify-end items-end sm:w-[35%] w-[100%] sm:flex-col md:flex-row gap-2 sm:mb-0 mb-2'>
          <button onClick={handleOpen} className='hover:bg-slate-300 items-center justify-center hidden h-10 px-6 text-sm border-gray-600 border-[1px] text-slate-900 bg-slate-100 rounded-3xl sm:flex'>Add New System</button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-describedby="modal-modal-description"
          >

            <div className=" absolute top-[50%] left-[50%] sm:w-[40%] w-[90%] h-[60%] bg-white dark:bg-slate-900 translate-x-[-50%] translate-y-[-50%] dark:text-white">
              <Typography id="modal-modal-title" variant="h6" component="h2">
                <div className="  h-[10vh] flex justify-between items-center px-4">
                  <h1 className="text-2xl font-semibold ">Add New System Details</h1>
                  <button onClick={handleClose}>
                    <CloseIcon />
                  </button>
                </div>
              </Typography>
              <Typography id="modal-modal-description">
                <AddSystem handleClose={handleClose}/>
              </Typography>
            </div>

          </Modal>
          <button onClick={handleOpen} className='flex items-center justify-center w-10 h-10 px-6 text-sm border rounded-full sm:hidden'><AddIcon className=' dark:text-white' /></button>
        </div>
      </div>
      <HomePageBox total={total} online={online} offline={offline} unknown={unknown} loading={loading} />
      <HomePageCards systems={systems || []} homeData={homeData || []} loading={loading} />
      {/* <ConnectivityStatus/> */}

    </div>
  )
}

export default Home
