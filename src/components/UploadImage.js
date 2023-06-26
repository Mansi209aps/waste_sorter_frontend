import React, { useState } from 'react';

const UploadImage = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = () => {
            if (reader.readyState === 2) {
                setSelectedImage(reader.result);
            }
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    return (
        <div>
            <input type="file" accept="image/*" onChange={handleImageUpload} />
            {selectedImage && (
                <div className='center'>
                    <img src={selectedImage} alt="Selected" style={styles.selectedImage} />
                </div>
            )}
        </div>
    );
};

const styles = {
    selectedImage: {
        width: '300px',
        height: 'auto',
        borderRadius: '10px',
        boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
        margin: '10px 30px 10px 5px'
    },
};

export default UploadImage;
