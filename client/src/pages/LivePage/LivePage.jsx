import React, { useEffect, useState } from 'react'
import { Helmet } from "react-helmet";
import GridPage from '../../components/LivePage/GridPage';
import LivePageSubHeader from '../../components/LivePage/LivePageSubHeader';

const LivePage = () => {

  return (
    <div className=' mt-[8vh] bg-slate-100 h-full w-full overflow-x-scroll pb-[5rem] dark:bg-slate-900'>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Live View | </title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <LivePageSubHeader/>
      <GridPage/>
    </div>
  )
}

export default LivePage
