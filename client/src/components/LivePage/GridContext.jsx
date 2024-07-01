// GridContext.js
import React, { createContext, useState } from 'react';

export const GridContext = createContext();

export const GridProvider = ({ children }) => {
    const [gridData, setGridData] = useState([]);

    const addGridItem = (item) => {
        setGridData([...gridData, { data: item,i: `item-${gridData.length + 1}`, x: 0, y: 0, w: 2, h: 2 }]);
    };


    return (
        <GridContext.Provider value={{ addGridItem, gridData }}>
            {children}
        </GridContext.Provider>
    );
};
