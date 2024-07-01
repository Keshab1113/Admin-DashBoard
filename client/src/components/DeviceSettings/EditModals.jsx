import React, { useEffect, useState } from 'react'
import LoadingPage from "../../components/LoadingPage/LoadingPage"
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'


const EditModals = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        // Simulate loading for 5 seconds
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 5000);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className=" w-full rounded-md flex flex-col justify-around p-4 h-[100%]">
            {
                loading ? <Skeleton count={8} /> :
                    <>
                        <div className=" flex flex-col justify-between">
                            <h1 className=' font-semibold'>Device Input</h1>
                            <input type="text" name="" id="" className="w-[50%] h-8 rounded-full px-4 outline-none border-[1.5px] border-black dark:bg-slate-600" />
                        </div>
                        <div className=" flex flex-col justify-between">
                            <h1 className=' font-semibold'>Parameter Name</h1>
                            <input type="text" name="" id="" className="w-[50%] h-8 rounded-full px-4 outline-none border-[1.5px] border-black dark:bg-slate-600" />
                        </div>
                        <div className=" flex flex-col justify-between">
                            <h1 className=' font-semibold'>Parameter Unit</h1>
                            <input type="text" name="" id="" className="w-[50%] h-8 rounded-full px-4 outline-none border-[1.5px] border-black dark:bg-slate-600" />
                        </div>
                        <div className=" flex flex-col justify-between">
                            <h1 className=' font-semibold'>Select Icons</h1>
                            <input type="text" name="" id="" className="w-[50%] h-8 rounded-full px-4 outline-none border-[1.5px] border-black dark:bg-slate-600" />
                        </div>
                        <div className=" flex flex-col justify-between">
                            <h1 className=' font-semibold'>Parameter Range(min-max)</h1>
                            <div className=' flex gap-4'>
                                <input type="text" name="" id="" className="w-[50%] h-8 rounded-full px-4 outline-none border-[1.5px] border-black dark:bg-slate-600" />
                                <input type="text" name="" id="" className="w-[50%] h-8 rounded-full px-4 outline-none border-[1.5px] border-black dark:bg-slate-600" />
                            </div>
                        </div>
                        <div className=" flex flex-col justify-between">
                            <h1 className=' font-semibold'>Alert Limits (High-Low)</h1>
                            <div className=' flex gap-4'>
                                <input type="text" name="" id="" className="w-[50%] h-8 rounded-full px-4 outline-none border-[1.5px] border-black dark:bg-slate-600" />
                                <input type="text" name="" id="" className="w-[50%] h-8 rounded-full px-4 outline-none border-[1.5px] border-black dark:bg-slate-600" />
                            </div>
                        </div>
                        <div className=" flex flex-col justify-between">
                            <h1 className=' font-semibold'>Color to Plot</h1>
                            <div className="w-[100%] h-8 rounded-full px-4 outline-none border-[1.5px] border-black dark:bg-slate-600 bg-slate-300 flex justify-center items-center">
                                <div className=' h-4 w-[98%] bg-red-700'></div>
                            </div>
                        </div>
                        <div className=' py-4 w-full flex justify-end'>
                            <button className=" bg-slate-500 w-28 h-10 rounded-full mr-3 text-white mb-4">Cancel</button>
                            <button className=" bg-blue-500 w-28 h-10 rounded-full text-white mb-4">Submit</button></div>
                    </>}
        </div>
    )
}

export default EditModals
