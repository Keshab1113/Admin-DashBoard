import React, { useState, useContext } from 'react'
import widgetType from './WidgetAPI';
import Wgm from "./Wgm"


const WidgetModals = () => {
    const [openwedget, setOpenwedget] = useState(false);
    const [modalContent, setModalContent] = useState(null);
    const handleOpen = (content) => {
        setOpenwedget(true);
        setModalContent(content);
    };
    const handleClose = () => {
        setOpenwedget(false);
    };

    
    return (
        <div className=' grid sm:grid-cols-5 grid-cols-3 gap-6 w-full'>
            {
                widgetType.map((i) => 
                    <button key={i.id} onClick={() => handleOpen(i.label)} className=' border flex flex-col justify-center items-center w-24 h-24 rounded-lg hover:cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-700'>
                        <div className=' flex justify-center items-center border-b-2  w-[90%] h-full'><i.Icon className={i.iconClass} /></div>
                        <div className=' flex justify-center items-center w-full h-full'>
                            <h1 >{i.label}</h1>
                        </div>
                    </button>
                )
            }
            
            <Wgm open={openwedget} handleClose={handleClose} widget={modalContent} />
        </div>
    )
}
export default WidgetModals
