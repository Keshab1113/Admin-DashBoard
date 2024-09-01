import React, { useEffect, useState, useContext } from 'react'
import Modal from '@mui/material/Modal';
import Typography from "@mui/material/Typography";
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import BackupIcon from '@mui/icons-material/Backup';
import axios from 'axios';
import WidgetModals from '../../components/LivePage/WidgetModals';
import toast, { Toaster } from 'react-hot-toast';


const LivePageSubHeader = ({data}) => {
    const [loading, setLoading] = useState(true);
    const [widgets, setwidgets] = React.useState(false);
    const WidgetModal = () => setwidgets(true);
    const handleClose = () => {
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

    const handleSave = () => {
        toast.success("All data are saved.");
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 4000);

        return () => clearTimeout(timeout);
    }, []);
  return (
      <div className='flex items-center w-full h-12 gap-2 px-2 overflow-y-scroll sm:overflow-hidden hideScrollBar '>
          <div className='flex float-right h-8 gap-2 sm:absolute right-1'>
              <Button onClick={WidgetModal} size="small" variant="contained" startIcon={<AddCircleIcon />}>
                  Widget
              </Button>
              <Button onClick={handleSave} variant="contained" size="small" endIcon={<BackupIcon />}>
                  Save
              </Button>
              <Toaster
                  position="top-right"
                  reverseOrder={false}
              />
          </div>
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
                  <div id="parent-modal-description">
                      <WidgetModals data={data} />
                  </div>
              </Box>
          </Modal>
      </div>
  )
}

export default LivePageSubHeader
