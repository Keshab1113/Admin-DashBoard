import React, { useState } from 'react';
import axios from "axios";
import Toast from '../../components/Toast/Toast';
import { useDispatch } from 'react-redux';
import { fetched } from '../../features/systemSlice';


const AddSystem = ({ handleClose }) => {
    const dispatch = useDispatch();
    const [showToast, setShowToast] = useState(false)
    const [toastMsg, setToastMsg] = useState("")
    const [formData, setFormData] = useState({
        machineName: '',
        deviceId: '',
        siteName: '',
        lat: '',
        lon: ''
    });
    const [isIdAlreadyAdded, setIsIdAlreadyAdded] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/home/addSystem', { formData }, { withCredentials: true })
            setToastMsg(response.data.msg);
            setShowToast(true);
            if (response.data.success) {
                const response = await axios.post("http://localhost:5000/api/home/systems", {},
                    {
                        withCredentials: true,
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    });
                const data = await response.data.sys;
                dispatch(fetched(data));
                setFormData({
                    machineName: '',
                    deviceId: '',
                    siteName: '',
                    lat: '',
                    lon: ''
                });
                handleClose();

            }
        } catch (error) {
            console.log(error, 27)
        }
    };

    const handleChange = async (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
        if (name === 'deviceId') {
            try {
                const response = await axios.get(`http://localhost:5000/api/home/checkDeviceID/${value}`,
                    { withCredentials: true, }
                );
                setIsIdAlreadyAdded(response.data.ifExist);
            } catch (error) {
                console.error('Error checking system ID:', error);
            }
        }
    };


    return (
        <>
            <div className=" h-[53vh] w-full rounded-md">
                <form onSubmit={handleSubmit}>
                    <div className=" h-[40vh] border-y-2 border-slate-200 dark:border-slate-600 flex flex-col justify-around px-4">
                        <div className="flex justify-between ">
                            <label htmlFor="systemName">System:</label>
                            <input type="text" name="machineName" value={formData.machineName} onChange={handleChange} className="w-[50%] h-8 rounded-full px-4 outline-none border-[1.5px] border-black dark:bg-slate-600" placeholder='Enter System Name' required />
                        </div>
                        <div className="flex justify-between">
                            <label htmlFor="DeviceId">Device ID:</label>
                            <input type="text" name="deviceId" value={formData.deviceId} onChange={handleChange} className="w-[50%] h-8 rounded-full px-4 outline-none border-[1.5px] border-black dark:bg-slate-600" placeholder='Enter Device Serial Number' required />
                        </div>
                        <div className="flex justify-between ">
                            <label htmlFor='installedAt'>Installed at:</label>
                            <input type="text" name="siteName" value={formData.siteName} onChange={handleChange} className="w-[50%] h-8 rounded-full px-4 outline-none border-[1.5px] border-black dark:bg-slate-600" placeholder='Enter Installed location/site' required />
                        </div>
                        <div className="flex justify-between ">
                            <label htmlFor='lattitidue'>Lattitude:</label>
                            <input type="text" name="lat" value={formData.lat || 0.00} onChange={handleChange} className="w-[50%] h-8 rounded-full px-4 outline-none border-[1.5px] border-black dark:bg-slate-600" placeholder='Enter Device location Lattitude' />
                        </div>
                        <div className="flex justify-between ">
                            <label htmlFor='longitide'>Longitude:</label>
                            <input type="text" name="lon" value={formData.lon || 0.00} onChange={handleChange} className="w-[50%] h-8 rounded-full px-4 outline-none border-[1.5px] border-black dark:bg-slate-600" placeholder='Enter Device location Longitude' />
                        </div>
                    </div>
                    <div className=" flex h-[13vh] justify-end items-center pr-6 pb-4">
                        {isIdAlreadyAdded !== null && (isIdAlreadyAdded ? <div className="mr-2 text-red-500">System ID already added</div> : <div className="mr-2 text-green-500">System ID available</div>)}
                        <button type="button" className="h-10 mr-3 text-white rounded-full bg-slate-500 w-28" onClick={handleClose}>Close</button>
                        <button type="submit" className={`h-10 text-white bg-blue-500 rounded-full w-28 ${isIdAlreadyAdded && 'cursor-not-allowed opacity-50'}`} disabled={isIdAlreadyAdded}>Add System</button>
                    </div>
                </form>

            </div>
            {showToast && < Toast message={toastMsg} type={"success"} />}
        </>
    );
};

export default AddSystem;
