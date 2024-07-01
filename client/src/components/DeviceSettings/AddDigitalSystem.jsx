import React, { useEffect, useState } from 'react'

const AddDigitalSystem = () => {
    
  return (
      <div className=" w-full rounded-md flex flex-col justify-around p-4 h-[100%]">
                      <div className=" flex flex-col justify-between">
                          <h1 className=' font-semibold'>Device Input</h1>
                          <input type="text" placeholder='Device Input' name="" id="" className="w-[50%] h-8 rounded-full px-4 outline-none border-[1.5px] border-black dark:bg-slate-600" />
                      </div>
                      <div className=" flex flex-col justify-between">
                          <h1 className=' font-semibold'>Parameter Name</h1>
                          <input type="text" placeholder='Parameter Name' name="" id="" className="w-[50%] h-8 rounded-full px-4 outline-none border-[1.5px] border-black dark:bg-slate-600" />
                      </div>
                      <div className=" flex flex-col justify-between">
                          <h1 className=' font-semibold'>Parameter Unit</h1>
                          <input type="text" placeholder='Parameter Unit' name="" id="" className="w-[50%] h-8 rounded-full px-4 outline-none border-[1.5px] border-black dark:bg-slate-600" />
                      </div>
                    
                      <div className=' py-4 w-full flex justify-end'>
                          <button className=" bg-slate-500 w-28 h-10 rounded-full mr-3 text-white mb-4">Cancel</button>
                          <button className=" bg-blue-500 w-28 h-10 rounded-full text-white mb-4">Add</button></div>
                  
      </div>
  )
}

export default AddDigitalSystem
