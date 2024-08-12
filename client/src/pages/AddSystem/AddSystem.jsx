import React, { useState } from 'react';

const AddSystem = ({ handleClose }) => {
    const handleSubmit =() => {
        alert('System will be update soon.');
        handleClose();
    };
    return (
            <div className=" h-[53vh] w-full rounded-md">
                    <div className=" h-[40vh] border-y-2 border-slate-200 dark:border-slate-600 flex flex-col justify-around px-4">
                        <div className="flex justify-between ">
                            <label htmlFor="systemName">System:</label>
                            <input type="text" name="machineName" className="w-[50%] h-8 rounded-full px-4 outline-none border-[1.5px] border-black dark:bg-slate-600" placeholder='Enter System Name' required/>
                        </div>
                        <div className="flex justify-between">
                            <label htmlFor="DeviceId">Device ID:</label>
                            <input type="text" name="deviceId" className="w-[50%] h-8 rounded-full px-4 outline-none border-[1.5px] border-black dark:bg-slate-600" placeholder='Enter Device Serial Number' required />
                        </div>
                        <div className="flex justify-between ">
                            <label htmlFor='installedAt'>Installed at:</label>
                            <input type="text" name="siteName" className="w-[50%] h-8 rounded-full px-4 outline-none border-[1.5px] border-black dark:bg-slate-600" placeholder='Enter Installed location/site' required/>
                        </div>
                        <div className="flex justify-between ">
                            <label htmlFor='lattitidue'>Lattitude:</label>
                            <input type="text" name="lat" className="w-[50%] h-8 rounded-full px-4 outline-none border-[1.5px] border-black dark:bg-slate-600" placeholder='Enter Device location Lattitude' />
                        </div>
                        <div className="flex justify-between ">
                            <label htmlFor='longitide'>Longitude:</label>
                            <input type="text" name="lon" className="w-[50%] h-8 rounded-full px-4 outline-none border-[1.5px] border-black dark:bg-slate-600" placeholder='Enter Device location Longitude' />
                        </div>
                    </div>
                    <div className=" flex h-[13vh] justify-end items-center pr-6 pb-4">
                        <button className="h-10 mr-3 text-white rounded-full bg-slate-500 w-28" onClick={handleClose}>Close</button>
                        <button onClick={handleSubmit} className="h-10 text-white bg-blue-500 rounded-full w-28" >Add System</button>
                    </div>
            </div>
    );
};

export default AddSystem;
