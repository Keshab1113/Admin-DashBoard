import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const DropdownWithFetch = () => {
    const [selectedValue, setSelectedValue] = useState('');
    const [data, setData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (selectedValue) {
            // Update URL
            navigate(`${selectedValue}`);

            // Fetch data from API
            fetchData(selectedValue);
        }
    }, [selectedValue]);

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const fetchData = async (value) => {
        try {
            const response = await fetch(`http://localhost:5173/live/${value}`);
            const result = await response.json();
            setData(result);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div>
            <select value={selectedValue} onChange={handleChange}>
                <option value="">Select an option</option>
                <option value="123">123</option>
                <option value="CMSDOH321654">CMSDOH321654</option>
                <option value="1235">1235</option>
                <option value="CMSDOH322654">CMSDOH322654</option>
                <option value="CMSDOH322656">CMSDOH322656</option>
            </select>

            {/* {data && (
                <div>
                    <h3 className=' bg-white text-blue-800 font-bold text-4xl'>Fetched Data:</h3>
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                </div>
            )} */}
        </div>
    );
};

export default DropdownWithFetch;
