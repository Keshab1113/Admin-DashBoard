import React from "react";

const MenuEditPage = ({ machineName, deviceId, lst, lat, lon }) => {
    
    return (
        <div className=" h-full w-full rounded-md border-y-2 border-slate-200">
            <div className=" h-[40vh] dark:border-slate-600 flex flex-col justify-around px-4">
                    <div className=" flex justify-between">
                        <h1>System:</h1>
                    <input type="text" value={machineName} name="" id="" className="w-[50%] h-8 rounded-full px-4 outline-none border-[1.5px] border-black dark:bg-slate-600" />
                    </div>
                    <div className=" flex justify-between">
                        <h1>Device ID:</h1>
                    <input type="text" value={deviceId} name="" id="" className="w-[50%] h-8 rounded-full px-4 outline-none border-[1.5px] border-black dark:bg-slate-600" />
                    </div>
                    <div className=" flex justify-between">
                        <h1>Installed at:</h1>
                    <input type="text" value={lst} name="" id="" className="w-[50%] h-8 rounded-full px-4 outline-none border-[1.5px] border-black dark:bg-slate-600" />
                    </div>
                    <div className=" flex justify-between">
                    <h1>Lattitude:</h1>
                    <input type="text" value={lat} name="" id="" className="w-[50%] h-8 rounded-full px-4 outline-none border-[1.5px] border-black dark:bg-slate-600" />
                    </div>
                    <div className=" flex justify-between">
                        <h1>Longitude:</h1>
                    <input type="text" value={lon} name="" id="" className="w-[50%] h-8 rounded-full px-4 outline-none border-[1.5px] border-black dark:bg-slate-600" />
                    </div>
                </div>
            </div>

    );
};

export default MenuEditPage;
