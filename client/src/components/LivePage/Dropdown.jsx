import React from 'react';

const Dropdown = ({ images, onSelectImage }) => {
    return (
        <select onChange={(e) => onSelectImage(e.target.value)} className=' h-10'>
            <option value="">Select an image</option>
            {images.map((image, index) => (
                <option key={index} value={image}>
                    {image}
                </option>
            ))}
        </select>
    );
};

export default Dropdown;
