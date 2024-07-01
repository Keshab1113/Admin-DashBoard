import React from 'react';

const ImageThumbnails = ({ images, onSelectImage }) => {
    return (
        <div className="thumbnails flex">
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`Thumbnail ${index}`}
                    onClick={() => onSelectImage(image)}
                    style={{ width: 50, height: 50, cursor: 'pointer', margin: 5 }}
                />
            ))}
        </div>
    );
};

export default ImageThumbnails;
