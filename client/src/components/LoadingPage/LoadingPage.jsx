import React, { useEffect, useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'


const LoadingPage = () => {

  
  return (
    <div className=' bg-white h-full w-full flex flex-col justify-center items-center'>
      <SkeletonTheme baseColor="gray" highlightColor="white"><Skeleton count={5} /></SkeletonTheme>
    </div>
  )
}

export default LoadingPage
