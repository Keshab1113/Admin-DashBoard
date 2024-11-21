import React, { useEffect, useState } from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import EditButton from "./EditButton";
import { useNavigate } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";
import { useSelector } from "react-redux";

const HomePageCharts = ({ loading }) => {
  const homeData = useSelector((state) => state.user.systems);
  const isAdmin = useSelector((state) => state.user.isAdmin);

  const systemStatus = (isOnline) => {
    switch (isOnline) {
      case "true":
        return (
          <div className=" bg-[#17a817] text-white px-2 py-1 w-max rounded-lg">
            {" "}
            <h1>Active</h1>
          </div>
        );
      case "false":
        return (
          <div className="px-2 py-1 text-white bg-red-600 rounded-lg w-max">
            <h1>Offline</h1>
          </div>
        );
      default:
        return (
          <div className="px-2 py-1 text-white bg-yellow-500 rounded-lg w-max">
            <h1>Unknown</h1>
          </div>
        );
    }
  };

  const navigate = useNavigate();
  return (
    <div className="grid w-full h-max grid-cols-1 gap-4 mt-4 sm:grid-cols-4 px-6">
      {homeData &&
        homeData.map((curElem) => {
          const {
            _id,
            siteName,
            machineName,
            params,
            isOnline,
            lst,
            lat,
            lon,
          } = curElem;
          return (
            <button
              onClick={() => navigate(`/live/${_id}`, { state: curElem })}
              className="flex flex-col w-full p-5 m-1 mr-4 rounded-lg cursor-pointer bg-white dark:bg-slate-900 dark:text-white sm:mt-1 shadow-xl shadow-black"
              key={_id}
            >
              {loading ? (
                <div className="flex flex-row justify-between w-full gap-4 px-4 py-2 mb-4 text-xl font-semibold rounded-lg bg-slate-100 dark:bg-slate-800 shadow ">
                  <div className="w-full text-left ">
                    <div className="flex ">
                      <h2>{machineName}</h2>
                      <div className="ml-2 text-xs ">
                        {systemStatus(isOnline)}
                      </div>
                    </div>
                    <h1 className=" text-sm text-slate-500">{siteName}</h1>
                  </div>
                  <div className=" text-black dark:text-white  h-[60%] justify-around flex items-start hover:border hover:bg-slate-300 dark:hover:bg-slate-900 rounded-full">
                    {isAdmin &&
                      <EditButton
                        machineName={machineName}
                        id={_id}
                        lst={lst}
                        lat={lat}
                        lon={lon}
                      />}
                  </div>
                </div>
              ) : (
                <Skeleton
                  sx={{
                    bgcolor: "gray",
                    borderRadius: "8px",
                    height: "100%",
                    width: "100%",
                  }}
                  animation="wave"
                  variant="rectangular"
                  height={100}
                />
              )}
              <div className="flex flex-col justify-between w-full h-4/5 ">
                {params.map((ed) => {
                  const { _id, n, u, v } = ed;
                  return loading ? (
                    <div
                      className="flex items-center justify-between w-full"
                      key={`${_id}`}
                    >
                      <h1 className="font-bold ">{n}</h1>
                      <div className="flex w-24 justify-between">
                        <h1 className=" font-bold">
                          {Math.floor(Math.random() * 10 + 15)}
                        </h1>
                        <h1 className="font-bold">{u}</h1>
                      </div>
                    </div>
                  ) : (
                    <Skeleton sx={{ bgcolor: "gray" }} animation="wave" />
                  );
                })}
                <div className="flex justify-between mt-5 ">
                  <h1>Last updated: {lst} </h1>
                  <SettingsIcon className="cursor-pointer " />
                </div>
              </div>
            </button>
          );
        })}
    </div>
  );
};

export default HomePageCharts;
