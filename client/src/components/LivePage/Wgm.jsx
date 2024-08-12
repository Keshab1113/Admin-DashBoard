import React, { useState, useContext } from 'react';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { GridContext } from './GridContext';
import Box from '@mui/material/Box';


const Wgm = ({ open, handleClose, widget, data }) => {
    if (!widget) return null;
    const [age, setAge] = useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const { addGridItem, gridData } = useContext(GridContext);
    const handleAddClick = () => {
        addGridItem({ id: gridData.length, name: widget, parameter: age });
        handleClose();
    };   

    return (
        <Modal open={open} onClose={handleClose}>
            <Box
                sx={{ ...modalStyle }}
                className="sm:h-fit h-screen w-screen p-4 sm:max-w-3xl sm:mx-auto sm:rounded-lg sm:p-6 dark:bg-slate-800 dark:text-white overflow-y-auto"
            >
                <Typography variant="h6" component="h2" className="flex items-center">
                    <button onClick={handleClose}>
                        <ArrowBackIosIcon fontSize="small" className="text-slate-600 dark:text-white" />
                    </button>
                    <h1 className="font-bold ml-2">{widget} Details</h1>
                </Typography>
                <Typography sx={{ mt: 2 }}>
                    <div className="flex flex-col sm:flex-row w-full">
                        <div className="flex-1 pr-0 sm:pr-2">
                            <div className="mb-4">
                                <h1>Title</h1>
                                <input type="text" value={widget} className="w-full dark:text-black p-2 border rounded-md" />
                            </div>
                            <div className="mb-4">
                                <h1>Machine Name</h1>
                                <input type="text" value={data.machineName} className="w-full dark:text-black p-2 border rounded-md" />
                            </div>
                            <div className="mb-4">
                                <h1>Latitude</h1>
                                <input type="text" value={data.lat} className="w-full dark:text-black p-2 border rounded-md" />
                            </div>
                            <div className="mb-4">
                                <h1>Longitude</h1>
                                <input type="text" value={data.lon} className="w-full dark:text-black p-2 border rounded-md" />
                            </div>
                        </div>
                        <div className="flex-1 pl-0 sm:pl-2">
                            {data.params.map((hmm, index) => (
                                <div key={index} className="mb-4">
                                    <h1>
                                        {hmm.n} <span>({hmm.u})</span>
                                    </h1>
                                    <input type="text" value={hmm.v} className="w-full dark:text-black p-2 border rounded-md" />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-full mt-6 flex justify-end space-x-4">
                        <button onClick={handleAddClick} className="border rounded-md py-2 px-4 bg-blue-500 text-white hover:bg-blue-400">
                            Add
                        </button>
                        <button onClick={handleClose} className="rounded-md bg-red-600 text-white px-4 py-2 hover:bg-white hover:text-black hover:border">
                            Cancel
                        </button>
                    </div>
                </Typography>
            </Box>
        </Modal>


    );
};

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

export default Wgm;
