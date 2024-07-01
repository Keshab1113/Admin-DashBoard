import React, { useState } from 'react';
import TimezoneSelect from 'react-timezone-select';


const TimezoneSelector = () => {
    const [selectedTimezone, setSelectedTimezone] = useState('');

    const handleTimezoneChange = (timezone) => {
        setSelectedTimezone(timezone);
    };

    return (
        <div>
            <h2 className=' mb-2 dark:text-white text-black'>Select Timezone</h2>
            <TimezoneSelect
                value={selectedTimezone}
                onChange={handleTimezoneChange}
            />
            {/* {selectedTimezone && (
                <p className=' text-white'>Selected Timezone: {selectedTimezone.value}</p>
            )} */}
        </div>
    );
};

export default TimezoneSelector;
