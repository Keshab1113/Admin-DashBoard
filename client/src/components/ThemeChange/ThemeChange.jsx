import React, { useEffect, useState } from 'react'
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NightlightIcon from '@mui/icons-material/Nightlight';
import AppBar from "@mui/material/AppBar";

const ThemeChange = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : false;
  });

  const handleThemeSwitch = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
      return newMode;
    });
  };

  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);
  return (
    <AppBar position="static" sx={{ width: "40px", backgroundColor: "white" }} className=' h-[40px] w-[40px] mx-3 bg-white dark:bg-slate-600 flex justify-center items-center rounded-full cursor-pointer shadow'>
    <button onClick={handleThemeSwitch} >
      {
          isDarkMode ? <WbSunnyIcon className=' text-black dark:text-white' /> : <NightlightIcon className=' text-black dark:text-white rotate-[-45deg]' />
      }
      
      </button>
    </AppBar>
  )
}

export default ThemeChange
