import { Avatar, Card, CardContent, CardMedia, CircularProgress } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import Chart from './Charts';
import * as ml5 from 'ml5';
import './imageComponent.css';

interface ImageComponentProps {
    img: string;
    id: string;
}
const ImageComponent: React.FC<ImageComponentProps> = ({ img, id }) => {

    const [loading, setLoading] = useState(true);
    const [predictions, setPredictions] = useState([]);
    const [showDetails, setShowDetails] = useState(false);

    function modelLoaded() {
        console.log('Model Loaded!');
    }

    const classifyImage = useCallback(async () => {
        setLoading(true);
        console.log('Classifying image...' + id);
        try {
            const classifier = await ml5.imageClassifier('MobileNet', modelLoaded);
            const image = document.getElementById(id);

            if (image) {
                // Get predictions
                console.log('Predicting...' + id);
                const predictions = await classifier.predict(image, 1);

                // Set the state with the predictions
                setPredictions(predictions);
            }
        } catch (error) {
            console.error('Error classifying image:', error);
        } finally {
            console.log('Done!' + id);
            console.log(predictions);
            setLoading(false);
        }
    }, [setLoading, setPredictions]);

    const handleClick = useCallback(async () => {
        setShowDetails(!showDetails);
        await classifyImage();
    }, [showDetails, classifyImage]);

    useEffect(() => {
        classifyImage();
    }, [img, id, classifyImage]);

    if (!showDetails) {
        // If showDetails is false, render a small avatar
        return (
            <Avatar
                src={img}
                id={id}
                onClick={handleClick}
                style={{ cursor: 'pointer' }}
                sx={{ width: 100, height: 100 }}
            />
        );
    }
    return (
        <div className="image-container">
            <Card className="card">
                <CardMedia
                    component="img"
                    className="resized-image"
                    style={{ cursor: 'pointer' }}
                    onClick={() => setShowDetails(!showDetails)}
                    image={img}
                    id={id}
                />
                <CardContent className="card">
                    <div className="chart">
                        {loading ? (
                            <CircularProgress style={{ marginTop: 200 }} />
                        ) : (
                            predictions && <>
                                {predictions.slice(0, 2).map((prediction, index) => (
                                    <><div className="label-row">
                                        <div>  {prediction.label}</div>

                                    </div><div
                                        className="chart-row"
                                    >
                                            <div >
                                                <Chart
                                                    key={index}
                                                    data={{ confidence: prediction.confidence }} />
                                            </div>
                                        </div></>
                                ))}
                            </>
                        )}
                    </div>
                </CardContent>
            </Card>
        </div >
    );
}
export default ImageComponent;