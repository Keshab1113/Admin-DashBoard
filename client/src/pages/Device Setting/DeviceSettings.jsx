import React from 'react'
import TopBoxes from '../../components/DeviceSettings/TopBoxes'
import BottomBox from '../../components/DeviceSettings/BottomBox'
import { Helmet } from "react-helmet";

const DeviceSettings = () => {
  return (
    <div className='bg-slate-100 dark:bg-slate-950 w-full h-full mt-[8vh] flex flex-col overflow-y-scroll pb-20 pt-4'>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Device Manage</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <TopBoxes />
      <BottomBox />
    </div>
  )
}

export default DeviceSettings
