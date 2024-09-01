import React, { useState, useEffect } from "react";
import ThemeChange from "../ThemeChange/ThemeChange";
import SearchIcon from "@mui/icons-material/Search";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";
import HomeIcon from "@mui/icons-material/Home";
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import Button from "@mui/material/Button";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import DevicesIcon from '@mui/icons-material/Devices';
import ManageHistoryIcon from '@mui/icons-material/ManageHistory';
import User from './User';
import LogoutIcon from '@mui/icons-material/Logout';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import Notification from "./Notification";
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined';
import { useSelector, useDispatch } from "react-redux";
import Search from "./Search";
import logo from "/logo.png"
import { logout } from "../../features/userSlice";


function Navbar() {
  const location = useLocation();
  const [sidebar, setSidebar] = useState(false);
  const [ismenu, setIsmenu] = useState(true);
  const isLivePage = location.pathname.startsWith('/live/');
  const dispatch = useDispatch();
  

  const getIdFromPath = () => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    return pathSegments[1];
  };
  const id = getIdFromPath();

  const logouthandle = () => {
    dispatch(logout());
  }
  

  const showSidebar = () => {
    setIsmenu(!ismenu);
    setSidebar(!sidebar);
   
  };

  return (
    <>
      <div className="bg-white dark:bg-slate-900 h-[10vh] border-b-2 dark:border-slate-700 flex fixed w-full justify-between z-50 top-0">
        <div className="sm:w-[8%] w-[20%] h-full flex justify-around items-center pl-5">
          <button
            onClick={showSidebar}
            className="bg-white cursor-pointer text-red dark:text-white dark:bg-slate-900"
          >
            {
              ismenu ? <FormatAlignJustifyIcon className="mr-2 text-2xl text-black dark:text-white" />:< FormatAlignLeftIcon className="mr-2 text-2xl text-black dark:text-white" />
            }
          </button>
          <Link to={"/"}>
            <img src={logo} alt="Company logo" width="auto" className="h-8 w-8 rounded" title="Home"/>
          </Link>
        </div>
        
        <div className="flex items-center justify-between mr-4">
          <Search/>
          <div className="flex items-center justify-center h-14 w-14 border-x-2 dark:border-slate-700">
            <Notification/>
          </div>
          <ThemeChange />
          <div className="flex items-center justify-start ">
            <User />
          </div>
        </div>
      </div>
      <nav
        className={
          sidebar
            ? "nav-menu active bg-slate-200 dark:bg-[#060b26] fixed"
            : "nav-menu fixed"
        }
      >
        <ul className="flex flex-col items-center w-full" onClick={showSidebar}>
          <NavLink to={"/"} className={({ isActive }) =>
            `sidebaritems duration-200 ${isActive ? "bg-blue-500 text-white " : " text-black"
            }`
          }>
            <HomeIcon className="" />
            Home
          </NavLink>
          {
            isLivePage && <>
              <NavLink to={"/live"} className={({ isActive }) =>
                `sidebaritems duration-200 ${isActive ? "bg-blue-500 text-white " : " text-black"
                }`
              }>
                <InsertChartOutlinedIcon className="" />
                Live
              </NavLink>
              <NavLink to={`/live/${id}/historical`} className={({ isActive }) =>
                ` w-full border-b-2 border-white text-end px-1 py-2 duration-200 hover:bg-blue-400 hover:text-white ${isActive ? " bg-blue-500 text-white" : " text-black dark:text-white"
                }`
              }>
                <ManageHistoryIcon className="mr-1 " />
                Historian
              </NavLink>
              <NavLink to={`/live/${id}/analytical`} className={({ isActive }) =>
                `w-full border-b-2 border-white text-end py-2 px-1 duration-200 hover:bg-blue-400 hover:text-white ${isActive ? "bg-blue-500 text-white " : " text-black dark:text-white"
                }`
              }>
                <SpeedOutlinedIcon className="mr-1 " />
                Analytics
              </NavLink>
            </>
          }
          <NavLink to={"/dashboard"} className={({ isActive }) =>
            `sidebaritems duration-200 ${isActive ? "bg-blue-500 text-white " : " text-black"
            }`
          }>
            <DevicesIcon className="" />
            Dashboard
          </NavLink>
          <NavLink to={"plant"} className={({ isActive }) =>
            `sidebaritems duration-200 ${isActive ? "bg-blue-500 text-white " : " text-black"
            }`
          }>
            <SupervisedUserCircleIcon className="" />
            Plant
          </NavLink>
          <NavLink to={"profile"} className={({ isActive }) =>
            `sidebaritems duration-200 ${isActive ? "bg-blue-500 text-white " : " text-black"
            }`
          }>
            <AccountCircleIcon className="" />
            Profile
          </NavLink>
          <NavLink to={"subscription"} className={({ isActive }) =>
            `sidebaritems duration-200 ${isActive ? "bg-blue-500 text-white " : " text-black"
            }`
          }>
            <SubscriptionsIcon className="" />
            Subscription
          </NavLink>
          <button onClick={logouthandle} className="sidebaritems duration-200">
            <LogoutIcon className="rotate-180 " />
            Logout
          </button>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
