import React, { useEffect, useState } from 'react'
import EditCalendarOutlinedIcon from '@mui/icons-material/EditCalendarOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import Modal from '@mui/material/Modal';
import Typography from "@mui/material/Typography";
import CloseIcon from '@mui/icons-material/Close';
import EditModals from './EditModals';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import SelectIcons from "./SelectIcons"
import Skeleton from '@mui/material/Skeleton';
import AddAnalogSystem from './AddAnalogSystem';
import AddDigitalSystem from './AddDigitalSystem';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

const BottomBox = () => {
    const [open, setOpen] = React.useState(false);
    const [openAdd, setOpenAdd] = React.useState(false);
    const [openDelete, setOpenDelete] = React.useState(false);
    const [loading, setLoading] = useState(true);
    const [selectedOption, setSelectedOption] = useState(null);
    const handleOpen = () => setOpen(true);
    const handleAdd = () => {
        if (selectedOption === "") {
            alert("Please Select Device");
        } else {
            setOpenAdd(true);
        }
        
    }
    

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
        setOpenDelete(false);
        setOpenAdd(false);
    }

    const handleDeleteButton = () => {
        setOpenDelete(true);
    }

    useEffect(() => {
        // Simulate loading for 5 seconds
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 4000);

        return () => clearTimeout(timeout);
    }, []);


    return (
        <div className=' bg-slate-100 dark:bg-slate-950 w-full sm:h-[67vh] h-full flex justify-center px-4 sm:mt-0 mt-4 '>
            <div className=' bg-white dark:bg-slate-800 rounded-xl w-full sm:h-[55vh] h-full flex flex-col items-center'>
                {loading ? <Skeleton
                    sx={{ bgcolor: 'gray.300', borderRadius: '8px', height: '100%', width: '100%' }}
                    animation="wave"
                    variant="rectangular"
                    height={90}
                /> :
                    <div className=' border-b border-slate-100 dark:border-slate-600 shadow-md flex justify-between px-5 rounded-t-xl items-center w-full dark:bg-slate-800 h-[14vh]'>
                        <h1 className=' font-semibold dark:text-white'>Device Input Management</h1>
                        <select value={selectedOption} onChange={handleSelectChange} name="cars" id="cars" form="carform" className='h-10 px-4 text-sm bg-white dark:bg-slate-600 dark:text-white outline-none rounded-md'>
                            <option value="">Select...</option>
                            <option value="analog" className='bg-white rounded-3xl'>Analog</option>
                            <option value="digital">Digital</option>
                        </select>
                    </div>
                }
                {
                    loading ? <Skeleton
                        sx={{ bgcolor: 'gray.300', borderRadius: '8px', height: '100%', width: '100%', marginTop:"20px" }}
                        animation="wave"
                        variant="rectangular"
                        height={200}
                    /> :
                
                        <div className='w-[98%] sm:h-[31vh] h-full flex overflow-scroll sm:overflow-hidden'>
                            <table className="w-full mt-7 border border-slate-400 dark:bg-slate-800">
                                <thead className=' bg-blue-300 sm:h-14 uppercase h-max'>
                                    <tr className=''>
                                        <th className='border-r-2 border-slate-400'>Tags</th>
                                        <th className='border-r-2 border-slate-400'>parameter name</th>
                                        <th className='border-r-2 border-slate-400'>Unit</th>
                                        <th className='border-r-2 border-slate-400'>range min</th>
                                        <th className='border-r-2 border-slate-400'>range max</th>
                                        <th className='border-r-2 border-slate-400'>alert high</th>
                                        <th className='border-r-2 border-slate-400'>alert low</th>
                                        <th className='border-r-2 border-slate-400'>color</th>
                                        <th className=' border-r-2 border-slate-400'>action(s)</th>
                                        <th className='border-r-2 border-slate-400'>Icon</th>
                                        <th className=''>Show parameter</th>
                                    </tr>
                                </thead>
                                <tbody className=''>
                                    <tr className=' border h-11 bg-slate-100 capitalize text-center border-slate-400'>
                                        <td className='border-r-2 border-slate-400'>a1</td>
                                        <td className='border-r-2 border-slate-400'>humidity</td>
                                        <td className='border-r-2 border-slate-400'>%rh</td>
                                        <td className='border-r-2 border-slate-400'>0</td>
                                        <td className='border-r-2 border-slate-400'>100</td>
                                        <td className='border-r-2 border-slate-400'>50</td>
                                        <td className='border-r-2 border-slate-400'>100</td>
                                        <td className='border-r-2 border-slate-400'>
                                            <button className='bg-pink-600 w-20 h-5'></button>
                                        </td>
                                        <td className=' border-r-2 border-slate-400'>
                                            <button onClick={handleOpen} className=' text-green-400 mr-2 cursor-pointer'><EditCalendarOutlinedIcon /></button><button onClick={handleDeleteButton} className=' text-green-400 mr-2 cursor-pointer'><DeleteOutlineOutlinedIcon /></button></td>
                                        <td className='border-r-2 border-slate-400'>
                                            <SelectIcons />
                                        </td>
                                        <td><Checkbox {...label} /></td>
                                    </tr>
                                    <tr className=' border h-11 bg-slate-200 capitalize text-center border-slate-400'>
                                        <td className='border-r-2 border-slate-400'>a2</td>
                                        <td className='border-r-2 border-slate-400'>temperature</td>
                                        <td className='border-r-2 border-slate-400'>{'\u00B0'}C</td>
                                        <td className='border-r-2 border-slate-400'>0</td>
                                        <td className='border-r-2 border-slate-400'>100</td>
                                        <td className='border-r-2 border-slate-400'>50</td>
                                        <td className='border-r-2 border-slate-400'>100</td>
                                        <td className='border-r-2 border-slate-400'><button className='bg-blue-600 w-20 h-5'></button></td>
                                        <td className='border-r-2 border-slate-400'><button onClick={handleOpen} className=' text-green-400 mr-2 cursor-pointer'><EditCalendarOutlinedIcon /></button><button onClick={handleDeleteButton} className=' text-green-400 mr-2 cursor-pointer'><DeleteOutlineOutlinedIcon /></button></td>
                                        <td className='border-r-2 border-slate-400'>
                                            <SelectIcons />
                                        </td>
                                        <td><Checkbox {...label} /></td>
                                    </tr>
                                    <Modal
                                        open={open}
                                        onClose={handleClose}
                                        aria-describedby="modal-modal-description"
                                    >
                                        <div className=" absolute top-[50%] left-[50%] sm:w-[40%] w-[90%] h-[85%] bg-white dark:bg-slate-900 translate-x-[-50%] translate-y-[-50%] dark:text-white">
                                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                                <div className="  h-[10vh] flex justify-between items-center px-4 border-b-2">
                                                    <h1 className=" text-2xl font-semibold">Edit System Details</h1>
                                                    <button onClick={handleClose}>
                                                        <CloseIcon />
                                                    </button>
                                                </div>
                                            </Typography>
                                            <Typography id="modal-modal-description">
                                                <EditModals />
                                            </Typography>
                                        </div>
                                    </Modal>
                                    <Modal
                                        keepMounted
                                        open={openDelete}
                                        onClose={handleClose}
                                        aria-labelledby="keep-mounted-modal-title"
                                        aria-describedby="keep-mounted-modal-description"
                                    >
                                        <Box sx={style}>
                                            <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
                                                Delete
                                            </Typography>
                                            <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                                                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                                            </Typography>
                                            <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                                                <button onClick={handleClose} className=' border px-4 bg-blue-500 text-white'>Confirm</button>
                                            </Typography>
                                        </Box>
                                    </Modal>
                                    <Modal
                                        open={openAdd}
                                        onClose={handleClose}
                                        aria-describedby="modal-modal-description"
                                    >
                                        <div className=" absolute top-[50%] left-[50%] sm:w-[40%] w-[90%] h-min bg-white dark:bg-slate-900 translate-x-[-50%] translate-y-[-50%] dark:text-white">
                                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                                <div className="  h-[10vh] flex justify-between items-center px-4 border-b-2">
                                                    <h1 className=" text-2xl font-semibold">Add Parameter</h1>
                                                    <button onClick={handleClose}>
                                                        <CloseIcon />
                                                    </button>
                                                </div>
                                            </Typography>
                                            <Typography id="modal-modal-description">
                                                
                                                {selectedOption === 'analog' && 
                                                    <AddAnalogSystem />}
                                                {selectedOption === 'digital' && <AddDigitalSystem />}
                                            </Typography>
                                        </div>
                                    </Modal>

                                </tbody>
                            </table>
                        </div>
                }
                <div className=' bg-slate-200 dark:bg-slate-600 h-[2px] w-[98%] mt-6' ></div>
                <div className=' mt-4 w-[98%] flex justify-end pr-4'>
                    {loading ? <Skeleton
                        sx={{ bgcolor: 'gray.300', borderRadius: '8px', height: '100%', width: '100%' }}
                        animation="wave"
                        variant="rectangular"
                        height={30}
                        width={100}
                    /> : 
                        <button onClick={handleAdd} className=' bg-blue-700 px-5 py-1 rounded-full text-white mb-4'><AddOutlinedIcon />Add</button>
                    }
                </div>
            </div>
        </div>
    )
}

export default BottomBox
