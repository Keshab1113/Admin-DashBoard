import React, { useEffect, useState } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

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
    'Select All',
    'Flow Rate',
    'Tank Temperature',
    'Motor Current',
    'Motor Voltage',
    'Suction Pressure',
    'Control Valve Opening',
    'Dicharge Pressure',
    'Tank Pressure',
    'Tank Level',
    'VLL',
    'Power',
    'KWh',
];

const WidgetAdd = () => {
    const [personName, setPersonName] = React.useState([]);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };
    const [age, setAge] = React.useState('');

    const handleChangeType = (event) => {
        setAge(event.target.value);
    };
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        // Simulate loading for 5 seconds
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 5000);

        return () => clearTimeout(timeout);
    }, []);
    return (
        <div className=" w-full rounded-md flex flex-col justify-around p-4 h-[100%]">

            <div className=" flex flex-col justify-between">
                <h1 className=' font-semibold'>Widget Type</h1>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel id="demo-select-small-label">Widget Type</InputLabel>
                    <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        value={age}
                        label="Widget Type"
                        onChange={handleChangeType}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Block</MenuItem>
                        <MenuItem value={20}>Chart</MenuItem>
                        <MenuItem value={30}>Status</MenuItem>
                        <MenuItem value={10}>Status(Text)</MenuItem>
                        <MenuItem value={20}>Table</MenuItem>
                        <MenuItem value={30}>Heading</MenuItem>
                        <MenuItem value={10}>Map</MenuItem>
                        <MenuItem value={20}>Image</MenuItem>
                        <MenuItem value={30}>Control(Digital)</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className=" flex flex-col justify-between">
                <h1 className=' font-semibold'>Chart Type</h1>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel id="demo-select-small-label">Chart Type</InputLabel>
                    <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        value={age}
                        label="Widget Type"
                        onChange={handleChangeType}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Block</MenuItem>
                        <MenuItem value={20}>Chart</MenuItem>
                        <MenuItem value={30}>Status</MenuItem>
                        <MenuItem value={10}>Status(Text)</MenuItem>
                        <MenuItem value={20}>Table</MenuItem>
                        <MenuItem value={30}>Heading</MenuItem>
                        <MenuItem value={10}>Map</MenuItem>
                        <MenuItem value={20}>Image</MenuItem>
                        <MenuItem value={30}>Control(Digital)</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className=" flex flex-col justify-between">
                <h1 className=' font-semibold'>Title</h1>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel id="demo-select-small-label">Title</InputLabel>
                    <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        value={age}
                        label="Widget Type"
                        onChange={handleChangeType}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Block</MenuItem>
                        <MenuItem value={20}>Chart</MenuItem>
                        <MenuItem value={30}>Status</MenuItem>
                        <MenuItem value={10}>Status(Text)</MenuItem>
                        <MenuItem value={20}>Table</MenuItem>
                        <MenuItem value={30}>Heading</MenuItem>
                        <MenuItem value={10}>Map</MenuItem>
                        <MenuItem value={20}>Image</MenuItem>
                        <MenuItem value={30}>Control(Digital)</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className=" flex flex-col justify-between mt-4">
                <h1 className=' font-semibold'>Select Parameter(s)</h1>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel id="demo-multiple-checkbox-label">Parameter</InputLabel>
                        <Select
                            labelId="demo-multiple-checkbox-label"
                            id="demo-multiple-checkbox"
                            multiple
                            value={personName}
                            onChange={handleChange}
                        input={<OutlinedInput label="Parameter" />}
                            renderValue={(selected) => selected.join(', ')}
                            MenuProps={MenuProps}
                        >
                            {names.map((name) => (
                                <MenuItem key={name} value={name}>
                                    <Checkbox checked={personName.indexOf(name) > -1} />
                                    <ListItemText primary={name} />
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
            </div>
            <div className=" flex flex-col justify-between mt-4">
                <h1 className=' font-semibold'>Widget Color Settings</h1>
                <div className=' flex h-12 border-y items-center justify-around'>
                    <div className=' flex justify-center items-center'>
                        <h1>Background Color:</h1>
                        <div className=' border rounded-full h-9 w-24 flex justify-center items-center border-slate-600'><div className=' border h-6 w-16 border-black dark:bg-black bg-white'></div></div>
                    </div>
                    <div className=' flex justify-center items-center'>
                        <h1>Text Color:</h1>
                        <div className=' border rounded-full h-9 w-24 flex justify-center items-center border-slate-600'><div className=' border h-6 w-16 border-black bg-black dark:bg-white'></div></div>
                    </div>
                </div>
            </div>
            
            <div className=' py-4 w-full flex justify-end'>
                <button className=" bg-slate-500 w-28 h-10 rounded-full mr-3 text-white mb-4">Close</button>
                <button className=" bg-blue-500 w-28 h-10 rounded-full text-white mb-4">Add</button></div>

        </div>
    )
}

export default WidgetAdd
