import React from 'react'
import Box1 from '../../components/AnalyticalComponents/Box1'
import Box2 from '../../components/AnalyticalComponents/Box2'
import Box3 from '../../components/AnalyticalComponents/Box3'
import Box4 from '../../components/AnalyticalComponents/Box4'
import { Helmet } from "react-helmet";


const Analytical = () => {
  return (
    <div className=' grid sm:grid-cols-3 grid-cols-1 mt-[8vh] bg-slate-100 dark:bg-slate-900 sm:h-[92vh] h-full gap-4 p-4 overflow-y-scroll sm:overflow-y-hidden'>
          <Helmet>
              <meta charSet="utf-8" />
              <title>Analytical Page</title>
              <link rel="canonical" href="http://mysite.com/example" />
          </Helmet>
      <Box1/>
      <Box2/>
      <Box3/>
          <Box4 />
          <Box3 />
          <Box1/>
    </div>
  )
}

export default Analytical
