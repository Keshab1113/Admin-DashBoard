import React, { useEffect, useState } from 'react'
import UserProfileBox from '../../components/ProfileBox/UserProfileBox'
import ProfileBox1 from '../../components/ProfileBox/ProfileBox1'
import { Helmet } from "react-helmet";
import Skeleton from '@mui/material/Skeleton';
import ProfileBox2 from '../../components/ProfileBox/ProfileBox2';


const UserProfile = () => {
  

  return (
    <div className=' mt-[8vh] p-4 sm:h-[92vh] h-full  w-full flex justify-around bg-slate-200 dark:bg-slate-950 sm:flex-row flex-col overflow-y-scroll sm:overflow-y-hidden gap-6'>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Profile Page</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
            <UserProfileBox />
            <ProfileBox1 />
            <ProfileBox2 />
    </div>
  )
}

export default UserProfile
