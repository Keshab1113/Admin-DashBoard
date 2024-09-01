import React, { useEffect, useState } from 'react'
import axios from "axios"
import KitchenIcon from "@mui/icons-material/Kitchen";
import ScreenSearchDesktopIcon from '@mui/icons-material/ScreenSearchDesktop';
import TroubleshootSharpIcon from '@mui/icons-material/TroubleshootSharp';
import Skeleton from '@mui/material/Skeleton';
import Toast from "../Toast/Toast";
import { useSelector } from 'react-redux';

const HomePageBox = ({ loading }) => {
  const homeData = useSelector(state => state.user.systems);
  
  const [numberOfOnline, setNumberOfOnline] = useState();
  const [numberOfOffline, setNumberOfOffline] = useState();
  const [numberOfUnknown, setNumberOfUnknown] = useState();

  useEffect(() => {
    var countOnline = 0;
    var countOffline = 0;
    homeData && homeData.map((i) => {
      if (i.isOnline == "true") {
        countOnline++;
      } else if (i.isOnline == "false") {
        countOffline++;
      }
    })
    var countUnknown = homeData && homeData.length - (countOnline + countOffline);
    setNumberOfOnline(countOnline < 10 ? "0" + countOnline : countOnline);
    setNumberOfOffline(countOffline < 10 ? "0" + countOffline : countOffline);
    setNumberOfUnknown(countUnknown < 10 ? "0" + countUnknown : countUnknown);
  })
  

  return (
    <>
      <div className="h-[21vh] overflow-auto grid grid-flow-col items-center gap-2 sm:grid-cols-4 hideScrollBar px-6">
        {loading ? <div className=" bg-[#d4d5f4] dark:bg-slate-900 w-[90vw] sm:w-full h-[13.5vh] rounded-xl pr-4 pt-2 flex-row-reverse flex justify-between items-center shadow-lg shadow-black">
            <button className=" bg-blue-700 rounded-3xl px-4 py-[4px] text-white text-xs">
              Manage
            </button>
          <div className="flex ml-4 w-full">
            <div className="flex items-center justify-center p-3 rounded-full bg-slate-100">
              <KitchenIcon className="text-blue-700 " />
            </div>
            <div className="flex flex-col w-full ml-4">
              <h1 className="font-semibold text-black dark:text-white ">Total System(s)</h1>

              <h1 className="w-full text-xl font-semibold text-blue-700">{homeData && homeData.length < 10 ? "0" + homeData && homeData.length : homeData && homeData.length}</h1>
            </div>
          </div>
        </div> : <Skeleton
          sx={{ bgcolor: 'grey', borderRadius: '8px', height: '100%', width: '100%' }}
          variant="rectangular"
          animation="wave"
          height={100}
        />}
        {loading ? <div className=" bg-[#d3f8d3] dark:bg-slate-900 sm:w-full w-[90vw] h-[13.5vh] rounded-xl pr-4 pt-2 flex-row-reverse flex justify-between items-center shadow-lg shadow-black">
          <button className=" bg-[#17a817] rounded-3xl px-4 py-[4px] text-white text-xs">
              Manage
            </button>
          <div className="flex w-full ml-4">
            <div className="flex items-center justify-center p-3 rounded-full bg-slate-100">
              <ScreenSearchDesktopIcon className="text-yellow-600 " />
            </div>
            <div className="flex flex-col ml-4 ">
              <h1 className="font-semibold dark:text-white">Online System</h1>
              <h1 className="w-full text-xl font-semibold text-yellow-600">{numberOfOnline}</h1>
            </div>
          </div>
        </div> : <Skeleton
          sx={{ bgcolor: 'grey', borderRadius: '8px', height: '100%', width: '100%' }}
          variant="rectangular"
          animation="wave"
          height={100}
        /> }
        {loading ? <div className=" bg-[#f2ddd6] dark:bg-slate-900 w-[90vw] sm:w-full  h-[13.5vh] rounded-xl pr-4 pt-2 flex-row-reverse flex justify-between items-center shadow-lg shadow-black">
            <button className=" bg-red-600 rounded-3xl px-4 py-[4px] text-white text-xs">
              Manage
            </button>
          <div className="flex ml-4 ">
            <div className="flex items-center justify-center p-3 rounded-full bg-slate-100">
              <TroubleshootSharpIcon className="text-red-600 " />
            </div>
            <div className="flex flex-col ml-4 ">
              <h1 className="font-semibold dark:text-white">Offline System</h1>
              <h1 className="w-full text-xl font-semibold text-red-600">{numberOfOffline}</h1>
            </div>
          </div>
        </div> : <Skeleton
          sx={{ bgcolor: 'grey', borderRadius: '8px', height: '100%', width: '100%' }}
          variant="rectangular"
          animation="wave"
          height={100}
        />}
        {
          loading ? <div className=" bg-[#e9f3bf] dark:bg-slate-900 w-[90vw] sm:w-full  h-[13.5vh] rounded-xl pr-4 pt-2 flex-row-reverse flex justify-between items-center shadow-lg shadow-black">
            <button className=" bg-yellow-500 rounded-3xl px-4 py-[4px] text-white text-xs">
                Manage
              </button>
            <div className="flex ml-4 ">
              <div className="flex items-center justify-center p-3 rounded-full bg-slate-100">
                <TroubleshootSharpIcon className="text-red-600 " />
              </div>
              <div className="flex flex-col ml-4 ">
                <h1 className="font-semibold dark:text-white">Unknown System</h1>
                <h1 className="w-full text-xl font-semibold text-red-600">{numberOfUnknown}</h1>
              </div>
            </div>
          </div> : <Skeleton
            sx={{ bgcolor: 'grey', borderRadius: '8px', height: '100%', width: '100%' }}
            animation="wave"
            variant="rectangular"
            height={100}
          />
        }
      </div>
    </>
  );
};

export default HomePageBox;
