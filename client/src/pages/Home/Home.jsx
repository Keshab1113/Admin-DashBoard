import React, { useEffect, useState } from 'react'
import axios from "axios"
import HomePageBox from '../../components/HomePageBox/HomePageBox'
import AddIcon from '@mui/icons-material/Add';
import { Helmet } from "react-helmet";
import { useSelector } from 'react-redux';
import AddSystem from '../AddSystem/AddSystem';
import Modal from '@mui/material/Modal';
import Typography from "@mui/material/Typography";
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from 'react-redux';
import { fetched } from '../../features/userSlice';
import HomePageCharts from '../../components/HomePageCharts/HomePageCharts';


const Home = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const systems = useSelector((state) => state.user.systems);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
 
  useEffect(() => {
      const getHomeData = async () => {
        try {
          const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/home/devices`);
          const data = await response.data.devices;
          dispatch(fetched({systems:data}));
          setLoading(true);
        } catch (error) {
          console.log(error);
        }
      }
      getHomeData();
      const interValId = setInterval(() => {
        getHomeData();
      }, 5000);
      return () => clearInterval(interValId);
  }, []);
  
  
  

  return (
    <div className=' bg-slate-100 dark:bg-slate-950 w-full h-full justify-center items-center float-end pt-[12vh] pb-20'>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home Page |  All Your systems |</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className='flex-col justify-between sm:flex sm:flex-row px-6'>
        <div>
          <div className='flex text-2xl font-semibold text-black dark:text-white'>  <h1 className=' capitalize'>Hii, {user ? user.username : "User"}</h1></div>
          <h2 className='text-base text-slate-600 dark:text-slate-400'>Hey, Here are your all systems.</h2>
        </div>
        <div className=' sm:flex flex justify-end items-end sm:w-[35%] w-[100%] sm:flex-col md:flex-row gap-2 sm:mb-0 mb-2'>
          <button onClick={handleOpen} className=' items-center justify-center hidden h-10 px-6 text-sm text-white bg-blue-700 hover:bg-blue-800 rounded-3xl sm:flex shadow-xl shadow-black'>Add New System</button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-describedby="modal-modal-description"
          >
            <div className=" rounded-md absolute top-[50%] left-[50%] sm:w-[60%] w-[90%] h-max bg-white dark:bg-slate-900 translate-x-[-50%] translate-y-[-50%] dark:text-white">
              <Typography id="modal-modal-title" variant="h6" component="h2">
                <div className="  lg:h-[10vh] h-full flex justify-between items-center md:px-6 px-4 py-4">
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
          <button onClick={handleOpen} className='flex items-center justify-center w-10 h-10 px-6 text-sm border bg-blue-800 rounded-full sm:hidden'><AddIcon className='  text-white' /></button>
        </div>
      </div>
      <HomePageBox loading={loading} />
      <HomePageCharts loading={loading} />
    </div>
  )
}

export default Home;
