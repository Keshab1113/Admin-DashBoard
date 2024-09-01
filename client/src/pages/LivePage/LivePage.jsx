import React, { useEffect, useState } from 'react'
import { Helmet } from "react-helmet";
import GridPage from '../../components/LivePage/GridPage';
import LivePageSubHeader from '../../components/LivePage/LivePageSubHeader';
import { useLocation } from 'react-router-dom';

const LivePage = () => {
  const location = useLocation();
  const data = location.state || {};
  

  return (
    <div className=' pt-[10vh] bg-slate-100 h-full w-screen pb-[5rem] dark:bg-slate-950 overflow-x-hidden px-2 min-h-screen'>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Live View | </title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <LivePageSubHeader data={data} />
      <div className='border bg-white dark:bg-slate-900 dark:text-white w-full p-4 rounded-xl shadow-xl shadow-black flex flex-col gap-4 items-start justify-start sm:flex-row sm:items-center sm:justify-around'>
        <h1 className='text-sm font-bold w-full sm:w-auto'>Machine Name: {data.machineName}</h1>
        <h1 className='text-sm font-semibold w-full sm:w-auto'>Latitude: {data.lat}</h1>
        <h1 className='text-sm font-semibold w-full sm:w-auto'>Longitude: {data.lon}</h1>
        <h1 className='text-sm font-semibold w-full sm:w-auto'>Last updated: {data.lst}</h1>
        <div className='flex flex-col sm:flex-row w-full sm:w-fit gap-4'>
          {data.params.map((ed) => {
            const { _id, n, u, v } = ed;
            return (
              <div className='flex items-center justify-start text-sm gap-1 w-full sm:w-auto' key={`${_id}`}>
                <h1 className='font-bold'>{n}:</h1>
                <h1 className='font-bold'>{v}<span className='text-blue-700'>{u}</span></h1>
              </div>
            )
          })}
        </div>
      </div>

      <GridPage data={data} />
    </div>
  )
}

export default LivePage
