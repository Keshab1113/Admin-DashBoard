import React from "react";

const MenuEditPage = (props) => {
    return (
        <div className=" h-[53vh] w-full rounded-md">
            <div className=" h-[40vh] border-y-2 border-slate-200 dark:border-slate-600 flex flex-col justify-around px-4">
                    <div className=" flex justify-between">
                        <h1>System:</h1>
                    <input type="text" value={props.cardDetails.machineName} name="" id="" className="w-[50%] h-8 rounded-full px-4 outline-none border-[1.5px] border-black dark:bg-slate-600" />
                    </div>
                    <div className=" flex justify-between">
                        <h1>Device ID:</h1>
                    <input type="text" value={props.cardDetails.deviceId} name="" id="" className="w-[50%] h-8 rounded-full px-4 outline-none border-[1.5px] border-black dark:bg-slate-600" />
                    </div>
                    <div className=" flex justify-between">
                        <h1>Installed at:</h1>
                    <input type="text" value={props.cardDetails.siteName} name="" id="" className="w-[50%] h-8 rounded-full px-4 outline-none border-[1.5px] border-black dark:bg-slate-600" />
                    </div>
                    <div className=" flex justify-between">
                    <h1>Lattitude:</h1>
                    <input type="text" value={props.cardDetails.lat} name="" id="" className="w-[50%] h-8 rounded-full px-4 outline-none border-[1.5px] border-black dark:bg-slate-600" />
                    </div>
                    <div className=" flex justify-between">
                        <h1>Longitude:</h1>
                    <input type="text" value={props.cardDetails.lon} name="" id="" className="w-[50%] h-8 rounded-full px-4 outline-none border-[1.5px] border-black dark:bg-slate-600" />
                    </div>
                </div>
            <div className=" flex h-[13vh] justify-end items-center pr-6 pb-4">
                    <button className=" bg-slate-500 w-28 h-10 rounded-full mr-3 text-white">Cancel</button>
                    <button className=" bg-blue-500 w-28 h-10 rounded-full text-white">Update</button>
                </div>

            </div>

    );
};

export default MenuEditPage;
