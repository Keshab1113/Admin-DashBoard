import React, { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import { InputText } from "primereact/inputtext";
import { Dialog } from "primereact/dialog";
import profilePhoto from "/Profile.png";
import Avatar from "react-avatar-edit";
import { useSelector } from 'react-redux';
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

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

const UserProfileBox = () => {
    const [image, setImage] = useState("");
    const [imageCrop, setImageCrop] = useState(false);
    const [src, setSrc] = useState(false);
    const [profile, setProfile] = useState([]);
    const [pview, setPview] = useState(false);
    const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
    const user = useSelector((state) => state.user.user);

    const profileFinal = profile.map((item) => item.pview);

    const onClose = () => {
        setPview(null);
    };
    const onCrop = (view) => {
        setPview(view);
    };
    const saveCropImage = () => {
        setProfile([...profile, { pview }]);
        setImageCrop(false);
    };
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const [openEmail, setOpenEmail] = React.useState(false);
    const handleOpenEmail = () => setOpenEmail(true);
    const [openCompany, setOpenCompany] = React.useState(false);
    const handleOpenCompany = () => setOpenCompany(true);
    const [openUsername, setOpenUsername] = React.useState(false);
    const handleOpenUserName = () => setOpenUsername(true);
    const handleClose = () => {
        setOpen(false);
        setOpenEmail(false);
        setOpenCompany(false);
        setOpenUsername(false);
    }
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        // Simulate loading for 5 seconds
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 100);

        return () => clearTimeout(timeout);
    }, []);
    return (
        <>
            <div className="bg-white  sm:w-[25%] rounded-2xl w-full flex flex-col justify-end items-center dark:bg-slate-800 dark:text-white mb-10 shadow-xl shadow-black">
                {loading ? <Skeleton
                    sx={{ bgcolor: 'grey', borderRadius: '8px', height: '100%', width: '100%' }}
                    variant="rectangular"
                    animation="wave"
                /> :
                    <>
                        <div className=" h-[52%] w-full flex flex-col justify-center items-center  dark:bg-slate-800 rounded-t-2xl">
                            <div className="flex justify-center w-full pt-4 pb-4 border-b border-black dark:bg-slate-600 bg-white h-14 dark:border-slate-600 rounded-t-2xl">
                                <h1 className=" font-extrabold pb-2 px-6 w-[90%]  text-black text-lg dark:text-white">
                                    My Profile
                                </h1>
                            </div>
                            <div className="flex flex-col items-center justify-center w-full h-full mt-2">
                                <img
                                    style={{
                                        width: "150px",
                                        height: "150px",
                                        borderRadius: "50%",
                                        objectFit: "cover",
                                        border: "4px solid grey",
                                    }}
                                    onClick={() => setImageCrop(true)}
                                    src={profileFinal.length ? profileFinal : profilePhoto}
                                    alt="Profile photo"
                                />
                                
                            </div>
                            <Dialog
                                className="p-2 rounded-md bg-slate-200"
                                visible={imageCrop}
                                header={() => (
                                    <p htmlFor="" className="text-2xl font-semibold text-blue-900 ">
                                        Update Profile Photo
                                    </p>
                                )}
                                onHide={() => setImageCrop(false)}
                                footer={() => (
                                    <div className=" flex justify-center items-center">
                                        <button className=" bg-blue-500 px-4 py-2 mr-4">Update</button>
                                        <button className=" bg-red-500 px-4 py-2 ">Cancel</button>
                                    </div>
                                )

                                }
                            >
                                <div className="flex flex-col items-center bg-white ">
                                    <Avatar
                                        width={500}
                                        height={400}
                                        onCrop={onCrop}
                                        onClose={onClose}
                                        src={src}
                                        shadingColor={"#474649"}
                                        backgroundColor={"#474649"}
                                    />
                                    <div className="flex flex-col items-center w-12 mt-5 ">
                                        <div className="flex justify-around mt-4 mb-2">
                                            <Button
                                                onClick={saveCropImage}
                                                label="Save"
                                                icon="pi pi-check"
                                                className="px-4 py-1 text-white bg-blue-700 border "
                                            />
                                        </div>
                                    </div>
                                </div>
                            </Dialog>
                            <InputText
                                type="file"
                                accept="/image/*"
                                style={{ display: "none" }}
                                onChange={(event) => {
                                    const file = event.target.files[0];
                                    if (file && file.type.substring(0, 5) === "image") {
                                        setImage(file);
                                    } else {
                                        setImage(null);
                                    }
                                }}
                            />
                        </div>
                        <div className=" w-full h-[58%] px-6 py-4 bg-blue-600 dark:bg-slate-700 rounded-t-2xl rounded-b-2xl text-white">
                            <div className="flex items-center justify-between pb-2 mt-4 border-b border-slate-200">
                                <h1 className="font-semibold ">
                                    UserName:
                                </h1>
                                <div className="font-semibold">{user.username || <Skeleton />}</div>
                                <button onClick={handleOpenUserName}>
                                    <EditIcon className="cursor-pointer " />
                                </button>
                                <Modal
                                    keepMounted
                                    open={openUsername}
                                    onClose={handleClose}
                                    aria-labelledby="keep-mounted-modal-title"
                                    aria-describedby="keep-mounted-modal-description"
                                >
                                    <Box sx={style}>
                                        <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
                                            Edit UserName
                                        </Typography>
                                        <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                                            <input type="text" name="address" value={user.username} id="" className="w-full " />
                                            <div className="mt-4 ">
                                                <button onClick={handleClose} className="px-4 py-2 mr-5 text-white bg-blue-600 border rounded-md ">Cancel</button>
                                                <button className="px-4 py-2 text-white bg-blue-600 border rounded-md ">Save</button>
                                            </div>
                                        </Typography>
                                    </Box>
                                </Modal>
                            </div>
                            <div className="flex items-center justify-between pb-2 mt-4 border-b border-slate-200">
                                <h1 className="font-semibold ">
                                    Email:
                                </h1>
                                <div className="font-semibold">{user.email || <Skeleton />}</div>
                                <button onClick={handleOpenEmail}>
                                    <EditIcon className="cursor-pointer " />
                                </button>
                                <Modal
                                    keepMounted
                                    open={openEmail}
                                    onClose={handleClose}
                                    aria-labelledby="keep-mounted-modal-title"
                                    aria-describedby="keep-mounted-modal-description"
                                >
                                    <Box sx={style}>
                                        <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
                                            Change Your Email
                                        </Typography>
                                        <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                                            <input type="text" name="address" value={user.email} id="" className="w-full " />
                                            <div className="mt-4 ">
                                                <button onClick={handleClose} className="px-4 py-2 mr-5 text-white bg-blue-600 border rounded-md ">Cancel</button>
                                                <button className="px-4 py-2 text-white bg-blue-600 border rounded-md ">Save</button>
                                            </div>
                                        </Typography>
                                    </Box>
                                </Modal>
                            </div>
                            <div className="flex items-center justify-between pb-2 mt-4 border-b border-white">
                                <h1 className="font-semibold ">Address: Jalpaiguri, India</h1>
                                <button onClick={handleOpen}>
                                    <EditIcon className="cursor-pointer " />
                                </button>
                                <Modal
                                    keepMounted
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="keep-mounted-modal-title"
                                    aria-describedby="keep-mounted-modal-description"
                                >
                                    <Box sx={style}>
                                        <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
                                            Change Your Address
                                        </Typography>
                                        <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                                            <input type="text" name="address" value={"Jalpaiguri, India"} id="" className="w-full " />
                                            <div className="mt-4 ">
                                                <button onClick={handleClose} className="px-4 py-2 mr-5 text-white bg-blue-600 border rounded-md ">Cancel</button>
                                                <button className="px-4 py-2 text-white bg-blue-600 border rounded-md ">Save</button>
                                            </div>
                                        </Typography>
                                    </Box>
                                </Modal>
                            </div>
                            <div className="flex items-center justify-between pb-2 mt-4 border-b border-white ">
                                <h1 className="font-semibold ">Company: XYZ LTD.</h1>
                                <button onClick={handleOpenCompany}>
                                    <EditIcon className="cursor-pointer " />
                                </button>
                                <Modal
                                    keepMounted
                                    open={openCompany}
                                    onClose={handleClose}
                                    aria-labelledby="keep-mounted-modal-title"
                                    aria-describedby="keep-mounted-modal-description"
                                >
                                    <Box sx={style}>
                                        <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
                                            Edit Company Name
                                        </Typography>
                                        <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                                            <input type="text" name="address" value={"XYZ LTD."} id="" className="w-full " />
                                            <div className="mt-4 ">
                                                <button onClick={handleClose} className="px-4 py-2 mr-5 text-white bg-blue-600 border rounded-md ">Cancel</button>
                                                <button className="px-4 py-2 text-white bg-blue-600 border rounded-md ">Save</button>
                                            </div>
                                        </Typography>
                                    </Box>
                                </Modal>
                            </div>
                            <div className="flex justify-end w-full mt-4 ">
                                <button className=" bg-[#ff574a] px-4 py-1 border border-white mr-4 text-white rounded-full">
                                    Save
                                </button>
                                <button className="bg-[#ff574a] px-4 border border-white text-white rounded-full">
                                    more
                                </button>
                            </div>
                        </div>
                    </>}
            </div>
        </>
    );
};

export default UserProfileBox;
