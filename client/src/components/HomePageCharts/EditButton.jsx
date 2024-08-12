import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Tooltip from "@mui/material/Tooltip";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { Link } from "react-router-dom";
import Modal from '@mui/material/Modal';
import MenuEditPage from "../../pages/MenuEditPage/MenuEditPage";
import CloseIcon from '@mui/icons-material/Close';
import { MdDelete } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from 'react-redux';
import Toast from "../Toast/Toast";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: 2,
};



const EditButton = ({ machineName, deviceId, lst, lat, lon }) => {
    const dispatch = useDispatch();
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [toast, setToast] = useState({ show: false, message: '', type: '' });
    
    const triggerToast = (message, type) => {
        setToast({ show: true, message, type });
        setTimeout(() => {
            setToast({ show: false, message: '', type: '' });
        }, 3000);
    };
    const handleSuccess = () => {
        triggerToast('System updated successfully', 'success');
        setOpen(false);
    };
    

    const handleOpenUserMenu = async (event) => {
        event.stopPropagation();
        setAnchorElUser(event.currentTarget);

    };

    const handleCloseUserMenu = (event) => {
        event.stopPropagation();
        setAnchorElUser(null);
    };

    const [openDelete, setOpenDelete] = React.useState(false);
    const handleOpenDelete = () => {
        setOpenDelete(true); 
    }
    const handleCloseDelete = () => setOpenDelete(false);


    const handleDeleteSystem = () => {
        triggerToast('You need permissions to delete the system.', 'error');
        setOpenDelete(false);
    };


    return (
        <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
                <MoreVertIcon onClick={handleOpenUserMenu} />
            </Tooltip>
            <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
            >

                <div onClick={handleCloseUserMenu} className="flex flex-col items-center justify-around w-20 h-20 ">

                    <Link onClick={handleOpenDelete} className="cursor-pointer "><DeleteIcon /></Link>
                    <Modal
                        open={openDelete}
                        onClose={handleCloseDelete}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2" className="flex items-center justify-center text-center ">
                                <MdDelete className="text-4xl text-center " />
                            </Typography>
                            <button onClick={handleCloseDelete} className="absolute top-4 right-4"><RxCross2 className="text-2xl " /></button>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }} className="flex flex-col items-center justify-center text-center ">
                                Are you sure want to delete this item?
                                <div className="mt-4 ">
                                    <button onClick={handleCloseDelete} className="px-2 py-2 mr-4 border rounded-lg bg-slate-300 border-slate-600">No, cancel</button>
                                    <button onClick={handleDeleteSystem} className="px-2 py-2 text-white bg-red-600 border rounded-lg ">Yes, I'm sure</button>
                                </div>
                            </Typography>
                        </Box>
                    </Modal>
                    <Link onClick={handleOpen} className="cursor-pointer "><ModeEditIcon /></Link>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-describedby="modal-modal-description"
                    >

                        <div className=" absolute top-[50%] left-[50%] sm:w-[50%] w-[90%] h-[60%] bg-white dark:bg-slate-900 translate-x-[-50%] translate-y-[-50%] dark:text-white">
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                <div className="  h-[10vh] flex justify-between items-center px-4">
                                    <h1 className="text-2xl font-semibold ">Edit System Details</h1>
                                    <button onClick={handleClose}>
                                        <CloseIcon />
                                    </button>
                                </div>
                            </Typography>
                            <Typography id="modal-modal-description">
                                <MenuEditPage machineName={machineName} deviceId={deviceId} lst={lst} lat={lat} lon={lon} />
                                <div className=" flex h-[13vh] justify-end items-center pr-6 pb-4">
                                    <button onClick={handleClose} className=" bg-slate-500 w-28 h-10 rounded-full mr-3 text-white">Cancel</button>
                                    <button onClick={handleSuccess} className=" bg-blue-500 w-28 h-10 rounded-full text-white">Update</button>
                                    
                                </div>
                            </Typography>
                        </div>
                        
                    </Modal>
                    
                </div>
            </Menu>
            {toast.show && (
                <Toast message={toast.message} type={toast.type} />
            )}
        </Box>
    )
}

export default EditButton
