import React, { useEffect, useState } from 'react'
import axios from "axios"
import Box1 from '../../components/AnalyticalComponents/Box1'
import Box2 from '../../components/AnalyticalComponents/Box2'
import Box3 from '../../components/AnalyticalComponents/Box3'
import Box4 from '../../components/AnalyticalComponents/Box4'
import { Helmet } from "react-helmet";
import { useLocation } from 'react-router-dom';


const Analytical = () => {
  const [homeData, setHomeData] = useState(null);
  const location = useLocation();
  const getIdFromPath = () => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    return pathSegments[1];
  };
  const id = getIdFromPath();
  

  useEffect(() => {
    const getHomeData = async () => {
      try {
        const response = await axios.post("http://localhost:5000/api/home/systems", {}, {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json'
          }
        }
        );
        const data = await response.data.systemData;
        const device = data.find(item => item.deviceId === id);
        setHomeData(device.params);
        
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
    <div className=' mt-[8vh] bg-slate-100 dark:bg-slate-900 sm:h-[92vh] h-full gap-4 overflow-y-scroll '>
          <Helmet>
              <meta charSet="utf-8" />
              <title>Analytical Page</title>
              <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Box2 data={homeData} />
      <div className=' w-full h-fit my-4 gap-4 flex'>
      <Box1 data={homeData} />
        <Box3 data={homeData} />
      </div>
        <Box4 data={homeData} />
      
    </div>
  )
}

export default Analytical
