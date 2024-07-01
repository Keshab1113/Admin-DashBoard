import React, { useState, useContext } from 'react';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { GridContext } from './GridContext'; import OfflineBoltRoundedIcon from '@mui/icons-material/OfflineBoltRounded';
import Dropdown from './Dropdown';
import ImageThumbnails from './ImageThumbnails';
import machine1 from "/machine1.jpg"
import machine2 from "/machine2.jpeg"
import machine3 from "/machine3.avif"
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import Chip from '@mui/material/Chip';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
];

function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

const images = [
    machine1,
    machine2,
    machine3,
];

const Wgm = ({ open, handleClose, widget }) => {
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

    const [selectedImage, setSelectedImage] = useState(null);
    const [showDropdown, setShowDropdown] = useState(false);

    const handleSelectImage = (image) => {
        setSelectedImage(image);
        setShowDropdown(false);
    };
    const [lat, setLat] = useState('');
    const [lon, setLon] = useState('');
    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);

    const handleChangeDouble = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };
    const [src, setSrc] = useState('');
    const [imageFile, setImageFile] = useState(null);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        setImageFile(file);
        setSrc(URL.createObjectURL(file));
    };
    
    const renderComponent = () => {
        switch (widget) {
            case 'Map':
                return <div className=' flex mt-4'>
                    <label className=' mr-2'>
                        <h1 className=' mb-2'> Latitude</h1>
                        <input type="text" value={lat} onChange={(e) => setLat(e.target.value)} />
                    </label>
                    <label>
                        <h1 className=' mb-2'>Longitude</h1>
                        <input type="text" value={lon} onChange={(e) => setLon(e.target.value)} />
                    </label>
                </div>;
            case 'Double':
                return <div>
                    <FormControl sx={{ m: 1, width: 300 }}>
                        <InputLabel id="demo-multiple-chip-label">Chip</InputLabel>
                        <Select
                            labelId="demo-multiple-chip-label"
                            id="demo-multiple-chip"
                            multiple
                            value={personName}
                            onChange={handleChangeDouble}
                            input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                            renderValue={(selected) => (
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                    {selected.map((value) => (
                                        <Chip key={value} label={value} />
                                    ))}
                                </Box>
                            )}
                            MenuProps={MenuProps}
                        >
                            {names.map((name) => (
                                <MenuItem
                                    key={name}
                                    value={name}
                                    style={getStyles(name, personName, theme)}
                                >
                                    {name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>;
            case 'Image':
                return <div className=' flex flex-col'>
                    <label>
                        Image Source:
                        <input type="text" value={src} onChange={(e) => setSrc(e.target.value)} />
                    </label>
                    <div className=' flex'>
                    <label>
                        Upload Image:
                        <input type="file" onChange={handleImageUpload} />
                        </label>
                        <div className=' overflow-hidden h-24 w-24'>
                            {imageFile && <img src={src} alt="uploaded" />}
                        </div>
                    </div>
                </div>;
            default:
                return <div className=''>
                    <h1>Parameters</h1>
                    <FormControl className=' bg-white w-full'>
                        <InputLabel id="demo-simple-select-label">Parameters</InputLabel>
                        <Select
                            required
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Parameters"
                            onChange={handleChange}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </div>;
        }
    };

    return (
        <Modal open={open} onClose={handleClose}>
            <Box sx={{ ...modalStyle}} className=" sm:w-[50%] w-full dark:bg-slate-800 dark:text-white">
                <Typography variant="h6" component="h2" className=' flex'>
                    <button onClick={handleClose} ><ArrowBackIosIcon fontSize="small" className=' text-slate-600 dark:text-white' /></button>
                    <h1 className=' font-bold'>{widget} Details</h1>
                </Typography>
                <Typography sx={{ mt: 2 }}>
                    <div className=''>
                        <div className=' mb-4'>
                            <h1>Title</h1>
                            <input type="text" value={widget} name="" id="" className=' dark:text-black'/>
                        </div>
                        <div className=' mb-4'>
                            <h1>Background Color</h1>
                            <div className=' border w-28 h-10 flex justify-center items-center'><div className=' bg-black w-16 h-5'></div></div>
                        </div>
                        
                        {renderComponent()}
                        <div className=' flex mt-4 items-center  h-24 '>
                        <button className=' border flex flex-col justify-center items-center w-24 h-24 rounded-lg hover:cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-600 mr-2' onClick={() => setShowDropdown(!showDropdown)}><div className=' flex justify-center items-center border-b-2  w-[90%] h-full'><OfflineBoltRoundedIcon className=' text-blue-600' /></div>
                            <div className=' flex justify-center items-center w-full h-full'>
                                <h1 >Indicator</h1>
                            </div></button>
                            <div className=' flex h-24 justify-center items-center'>
                        {showDropdown && (
                            <>
                                <Dropdown images={images} onSelectImage={handleSelectImage} />
                                <ImageThumbnails images={images} onSelectImage={handleSelectImage} />
                            </>
                        )}
                        {selectedImage && (
                            <div className="selected-image">
                                <img src={selectedImage} alt="Selected" style={{ width: 100, height: 100 }} />
                            </div>
                            )}
                            </div>
                        </div>
                        <div className=' w-full mt-6'>
                            <button onClick={handleAddClick} className=' border rounded-md py-2 px-4 ml-4 float-right bg-blue-500 text-white hover:bg-blue-400 '>Add</button>
                            <button onClick={handleClose} className=' rounded-md bg-red-600 text-white px-4 py-2 float-right hover:bg-white hover:text-black hover:border'>Cancel</button>
                        </div>
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
