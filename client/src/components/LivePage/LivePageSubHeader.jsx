import React, { useEffect, useState, useContext } from 'react'
import { GrConfigure } from "react-icons/gr";
import { CiClock2 } from "react-icons/ci";
import { IoDownloadOutline } from "react-icons/io5";
import WidgetAdd from "../../components/LivePage/WidgetAdd"
import Modal from '@mui/material/Modal';
import Typography from "@mui/material/Typography";
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PublicIcon from '@mui/icons-material/Public';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import BackupIcon from '@mui/icons-material/Backup';
import EditIcon from '@mui/icons-material/Edit';
import EditOffIcon from '@mui/icons-material/EditOff';
import axios from 'axios';
import { LayoutContext } from './LayoutContext';
import WidgetModals from '../../components/LivePage/WidgetModals';
import { Select } from "flowbite-react";
import { GridContext } from './GridContext';
import DropdownWithFetch from './DropdownWithFetch';



    

const LivePageSubHeader = () => {
    const [isEditable, setIsEditable] = useState(false);

    const [loading, setLoading] = useState(true);
    const [openAdd, setOpenAdd] = React.useState(false);
    const [widgets, setwidgets] = React.useState(false);
    const handleAdd = () => setOpenAdd(true);
    const WidgetModal = () => setwidgets(true);
    const handleClose = () => {
        setOpenAdd(false);
        setwidgets(false);
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        boxShadow: 24,
        pt: 2,
        px: 4,
        pb: 3,
    };

    const { gridData } = useContext(GridContext);

    const handleSave = () => {
        axios.post('http://localhost:5000/api/save-layout', gridData)
            .then(response => {
                console.log('Layout saved successfully:', response);
            })
            .catch(error => {
                console.error('Error saving layout:', error);
            });
    };

    useEffect(() => {
        // Simulate loading for 5 seconds
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 4000);

        return () => clearTimeout(timeout);
    }, []);
  return (
      <div className='flex items-center w-full h-12 gap-2 px-2 overflow-y-scroll sm:overflow-hidden hideScrollBar dark:bg-slate-800'>
          <div className="online-indicator">
              <span className="blink"></span>
          </div>
          <div className='flex items-center justify-center w-8 h-8 text-2xl border-2 rounded-md text-slate-800 bg-slate-200'><GrConfigure /></div>
          <div className='flex items-center justify-center h-8 px-2 rounded-md '>
              <div className="max-w-md">
                  <DropdownWithFetch/>
              </div>
          </div>
          <Chip size="small" className=' dark:bg-white' icon={<LocationOnIcon />} label="Singapore" />
          <Chip size="small" className=' dark:bg-white' icon={<PublicIcon />} label="Asia/Kolkata" />
          <Chip size="small" className=' dark:bg-white' icon={<AccessTimeFilledIcon />} label="Last Updated at :2024-05-14 22:56" />


          <button className='flex items-center justify-center h-8 px-2 bg-white border-2 rounded-md'>
              <IoDownloadOutline />
              <h1 className=' text-[14px]'>Report</h1>
          </button>
          <div className='flex items-center justify-center h-8 px-2 bg-blue-300 rounded-md '>
              <CiClock2 />
              <h1 className=' text-[14px]'>Analytics</h1>
          </div>
          <div className='flex items-center justify-center h-8 px-2 bg-blue-100 rounded-md '>
              {/* <h1>Refresh rate: </h1> */}
              <label for="small" class="block m-auto text-sm font-medium text-gray-900 ">Refresh rate</label>
              <select name="cars" id="cars" form="carform" className='pr-10 ml-2 text-sm text-gray-600 bg-white border border-gray-300 appearance-none rounded-2xl hover:border-gray-400 focus:outline-none'>
                  <option value="volvo">10s</option>
                  <option value="saab">15s</option>
                  <option value="opel">20s</option>
                  <option value="audi">25s</option>
              </select>
          </div>
          <div className='flex float-right h-8 gap-2 sm:absolute right-1'>
              <IconButton aria-label="isEditable" className="rounded dark:text-white" title='Edit layout' size="large" onClick={() => setIsEditable(!isEditable)}>
                  {isEditable ? <EditIcon fontSize="inherit" /> : <EditOffIcon fontSize="inherit" />}
              </IconButton>


              <Button onClick={WidgetModal} size="small" variant="contained" startIcon={<AddCircleIcon />}>
                  Widget
              </Button>
              <Button onClick={handleSave} variant="contained" size="small" endIcon={<BackupIcon />}>
                  Save
              </Button>

          </div>
          <Modal
              open={openAdd}
              onClose={handleClose}
              aria-describedby="modal-modal-description"
          >
              <div className=" absolute top-[50%] left-[50%] md:w-[50%] w-[90%] h-min  translate-x-[-50%] translate-y-[-50%] ">
                  <Typography id="modal-modal-title" variant="h6" component="h2">
                      <div className="  h-[10vh] flex justify-between items-center px-4 border-b-2">
                          <h1 className="text-2xl font-semibold ">Add New Widget</h1>

                          <IconButton aria-label="cancel" onClick={handleClose} ><CancelRoundedIcon /></IconButton>
                          {/* <button >
                  <CloseIcon />
                </button> */}
                      </div>
                  </Typography>
                  <Typography id="modal-modal-description">
                      <WidgetAdd />
                  </Typography>
              </div>
          </Modal>
          <Modal
              open={widgets}
              onClose={handleClose}
              aria-labelledby="parent-modal-title"
              aria-describedby="parent-modal-description"
          >
              <Box sx={{ ...style }} className=" md:w-[50%] w-full h-max dark:bg-slate-900 dark:text-white">
                  <div className='flex justify-between mb-4 '>
                      <h2 id="parent-modal-title" className='text-2xl font-bold '>Add New Widget</h2>
                      <IconButton aria-label="cancel" onClick={handleClose} ><CancelRoundedIcon className=' dark:text-white' /></IconButton>
                  </div>
                  <p id="parent-modal-description">
                      <WidgetModals />
                  </p>
              </Box>
          </Modal>
      </div>
  )
}

export default LivePageSubHeader
