import React, { useCallback, useState } from 'react';
import Dropzone from 'react-dropzone';
import './ImageClassification.css';
import pig from './images/pig.jpg';
import alpaka from './images/alpaka.png';
import lion from './images/lion.jpg';
import tiger2 from './images/tiger2.jpg';
import elephant from './images/elefant.jpg';
import dog from './images/dog.png';
import wal from './images/wal.jpg';
import vogel from './images/vogel.jpg';
import jaguar from './images/jaguar.jpg';
import cat from './images/cat.jpg';
import ImageComponent from './components/imageComponent';
import { v4 as uuidv4 } from 'uuid';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const ImageClassifier: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [id, setId] = useState(null);

    const dropzoneStyle: React.CSSProperties = {
        width: '300px',
        height: '200px',
        border: '2px dashed #ccc',
        borderRadius: '4px',
        textAlign: 'center',
        margin: '20px auto',
        cursor: 'pointer',
    };

    const handleDrop = useCallback((acceptedFiles: any[]) => {
        if (acceptedFiles.length === 0) {
            // Handle the case where no files were dropped
            return;
        }

        const file = acceptedFiles[0];

        // Check if the file is an image
        if (!file.type.startsWith('image/')) {
            console.error('Invalid file type. Please drop an image file.');
            return;
        }

        const reader = new FileReader();

        reader.onload = () => {
            setSelectedImage(reader.result as string);
            setId(uuidv4());
        };
        reader.onerror = (error) => {
            console.error('Error reading the file:', error);
        };

        reader.readAsDataURL(file);
    }, []);

    const resetImage = () => {
        setSelectedImage(null);
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Image Classification</h1>
            <p>Here you can classify an Image with the ml5 framework.</p>
            <p>Drop an Image to classify it or click on one of the given Pictures to see their classification and confidence. The first row of given pictures have a minimum confidence of 50%.</p>
            {selectedImage ? (
                <div className="droppedImage">
                    <ImageComponent img={selectedImage} id={id} />
                    <Button variant="contained" onClick={resetImage} startIcon={<DeleteIcon />} style={{ width: '100px', height: '50px' }}>
                        Reset
                    </Button>
                </div>
            ) : (
                <div className="dropzone">
                    <Dropzone onDrop={handleDrop}>
                        {({ getRootProps, getInputProps }) => (
                            <div {...getRootProps()} style={{
                                ...dropzoneStyle, width: '200px', height: '100px', display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <input {...getInputProps()} />
                                <Button component="label" variant="text" startIcon={<CloudUploadIcon />} style={{
                                    width: '190px', height: '30px', backgroundColor: '#d4a7ac', color: '#ffffff'
                                }}>
                                    Upload file
                                </Button>
                            </div>
                        )}
                    </Dropzone>
                </div >
            )
            }
            <div className="image-row">
                <ImageComponent img={cat} id="cat" />
                <ImageComponent img={vogel} id="vogel" />
                <ImageComponent img={jaguar} id="jaguar" />
                <ImageComponent img={lion} id="lion" />
                <ImageComponent img={alpaka} id="alpaka" />
            </div>
            <div className="image-row">
                <ImageComponent img={elephant} id="elephant" />
                <ImageComponent img={pig} id="pig" />
                <ImageComponent img={dog} id="dog" />
                <ImageComponent img={tiger2} id="tiger2" />
                <ImageComponent img={wal} id="wal" />
            </div>
        </div >
    );
};

export default ImageClassifier;
