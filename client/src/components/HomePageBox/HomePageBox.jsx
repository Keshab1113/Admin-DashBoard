import React, { useEffect, useState } from 'react'
import axios from "axios"
import KitchenIcon from "@mui/icons-material/Kitchen";
import ScreenSearchDesktopIcon from '@mui/icons-material/ScreenSearchDesktop';
import TroubleshootSharpIcon from '@mui/icons-material/TroubleshootSharp';
// import 'react-loading-skeleton/dist/skeleton.css'
// import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import Skeleton from '@mui/material/Skeleton';
import Toast from "../Toast/Toast"

const HomePageBox = () => {
  const [numberOfSystem, setNumberOfSystem] = useState();
  const [numberOfOnline, setNumberOfOnline] = useState();
  const [numberOfOffline, setNumberOfOffline] = useState();
  const [numberOfUnknown, setNumberOfUnknown] = useState();
  const [loading, setLoading] = useState(true);

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('info');

  const handleShowToast = (message, type) => {
    setToastMessage(message);
    setToastType(type);
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 3000); // Default duration is 3 seconds
  };

  useEffect(() => {
    // Function to fetch data from the API
    const SystemData = async () => {
      try {
        const response2 = await axios.post("http://localhost:5000/api/home/homeData", {}, {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const data2 = await response2.data.data;
        var TotalLength = data2.length;
        setNumberOfSystem(TotalLength < 10 ? "0" + TotalLength : TotalLength);
        var countOnline = 0;
        var countOffline = 0;
        data2.map((i) => {
          if (i.isOnline == true) {
            countOnline++;
          } else if (i.isOnline == false) {
            countOffline++;
          }
        })
        var countUnknown = data2.length - (countOnline + countOffline);
        setNumberOfOnline(countOnline < 10 ? "0" + countOnline : countOnline);
        setNumberOfOffline(countOffline < 10 ? "0" + countOffline : countOffline);
        setNumberOfUnknown(countUnknown < 10 ? "0" + countUnknown : countUnknown);


      } catch (error) {
        console.log(error);
      }
    }

    // Fetch data initially
    SystemData();


    // Set up an interval to fetch data every 5 seconds
    const interValId = setInterval(() => {
      SystemData();
    }, 5000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interValId);
  }, []);

  useEffect(() => {
    // Simulate loading for 5 seconds
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timeout);
  }, []);



  return (
    <>
      <div className="h-[19vh] overflow-auto grid grid-flow-col items-center gap-2 sm:grid-cols-4 hideScrollBar">
        {loading ? <Skeleton
          sx={{ bgcolor: 'grey', borderRadius: '8px', height: '100%', width: '100%' }}
          variant="rectangular"
          animation="wave"
          height={100}
        /> : <div className=" bg-white dark:bg-slate-900 w-[90vw] sm:w-full h-[13.5vh] rounded-xl pr-4 pt-2 flex-row-reverse flex justify-between items-center">
            <button className=" bg-blue-700 rounded-3xl px-4 py-[4px] text-white text-xs">
              Manage
            </button>
          <div className="flex ml-4 w-full">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-100">
              <KitchenIcon className="text-blue-700 " />
            </div>
            <div className="flex flex-col w-full ml-4">
              <h1 className="font-semibold text-black dark:text-white ">Total System(s)</h1>

              <h1 className="w-full text-xl font-semibold text-blue-700">{numberOfSystem}</h1>
            </div>
          </div>
        </div>}
        {loading ? <Skeleton
          sx={{ bgcolor: 'grey', borderRadius: '8px', height: '100%', width: '100%' }}
          variant="rectangular"
          animation="wave"
          height={100}
        /> : <div className=" bg-white dark:bg-slate-900 sm:w-full w-[90vw] h-[13.5vh] rounded-xl pr-4 pt-2 flex-row-reverse flex justify-between items-center">
            <button onClick={() => handleShowToast('System(s) Online Manage button clicked', 'error')} className=" bg-yellow-500 rounded-3xl px-4 py-[4px] text-white text-xs">
              Manage
            </button>
          <div className="flex w-full ml-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-100">
              <ScreenSearchDesktopIcon className="text-yellow-600 " />
            </div>
            <div className="flex flex-col ml-4 ">
              <h1 className="font-semibold dark:text-white">System(s) Online</h1>
              <h1 className="w-full text-xl font-semibold text-yellow-600">{numberOfOnline}</h1>
            </div>
          </div>
        </div>}
        {loading ? <Skeleton
          sx={{ bgcolor: 'grey', borderRadius: '8px', height: '100%', width: '100%' }}
          variant="rectangular"
          animation="wave"
          height={100}
        /> : <div className=" bg-white dark:bg-slate-900 w-[90vw] sm:w-full  h-[13.5vh] rounded-xl pr-4 pt-2 flex-row-reverse flex justify-between items-center">
            <button onClick={() => handleShowToast('System(s) Offline Manage button clicked', 'info')} className=" bg-red-600 rounded-3xl px-4 py-[4px] text-white text-xs">
              Manage
            </button>
          <div className="flex ml-4 ">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-100">
              <TroubleshootSharpIcon className="text-red-600 " />
            </div>
            <div className="flex flex-col ml-4 ">
              <h1 className="font-semibold dark:text-white">System(s) Offline</h1>
              <h1 className="w-full text-xl font-semibold text-red-600">{numberOfOffline}</h1>
            </div>
          </div>
        </div>}
        {
          loading ? <Skeleton
            sx={{ bgcolor: 'grey', borderRadius: '8px', height: '100%', width: '100%' }}
            animation="wave"
            variant="rectangular"
            height={100}
          /> : <div className=" bg-white dark:bg-slate-900 w-[90vw] sm:w-full  h-[13.5vh] rounded-xl pr-4 pt-2 flex-row-reverse flex justify-between items-center">
              <button onClick={() => handleShowToast('System(s) Unknown Manage button clicked', 'success')} className=" bg-red-600 rounded-3xl px-4 py-[4px] text-white text-xs">
                Manage
              </button>
            <div className="flex ml-4 ">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-100">
                <TroubleshootSharpIcon className="text-red-600 " />
              </div>
              <div className="flex flex-col ml-4 ">
                <h1 className="font-semibold dark:text-white">System(s) Unknown</h1>
                <h1 className="w-full text-xl font-semibold text-red-600">{numberOfUnknown}</h1>
              </div>
            </div>
          </div>
        }
        {showToast && <Toast message={toastMessage} type={toastType} />}
      </div>
    </>
  );
};

export default HomePageBox;
