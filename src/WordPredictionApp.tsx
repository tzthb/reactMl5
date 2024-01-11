import React, { useState, useEffect } from 'react';
import { TextField, Button, List, ListItem, Typography, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import * as tf from "@tensorflow/tfjs";
import { TextInput } from 'react-native-gesture-handler';

const WordPredictionApp = () => {
    const [userInput, setUserInput] = useState('');
    const [predictions, setPredictions] = useState([]);
    let model: tf.LayersModel | null = null;
    const [selectedModel, setSelectedModel] = useState('model1');


    // Function to load the model
    const loadModel = async (modelName: string) => {
        model = await tf.loadLayersModel(`./src/trainedModells/${modelName}/${modelName}.json`);
    };


    async function predict(inputTensor: tf.Tensor) {
        if (model != null) {
            throw new Error('Model not loaded');
        }

        return model.predict(inputTensor);
    }

    const handleModelChange = (event: any) => {
        const modelName = event.target.value as string;
        setSelectedModel(modelName);
        loadModel(modelName);
    };
    const predictNextWords = async (text, model) => {
        // Tokenize the input text (you might need a suitable tokenizer for your use case)
        const tokens = text.split(' ');

        // Preprocess the tokens (you might need to preprocess based on your model's requirements)
        // Here, we convert the tokens to a numeric array for inference
        const inputTensor = tf.tensor2d([tokens.map(token => parseFloat(token))]);

        // Perform inference
        const predictions = await predict(inputTensor);

        // Clean up resources
        inputTensor.dispose();
        if (Array.isArray(predictions)) {
            predictions.forEach(prediction => prediction.dispose());
            // Convert the predictions to a JavaScript array
            const predictionsArray = await Promise.all(predictions.map(prediction => prediction.arraySync()));
            // Return the top 3 predictions
            return Array.isArray(predictionsArray[0]) ? predictionsArray[0].slice(0, 3) : [];
        } else {
            predictions.dispose();
        }
    };
    const updatePredictions = async () => {
        if (selectedModel) {
            // Call the function to predict the next words based on the selected model
            const predictedWords = await predictNextWords(userInput, selectedModel);
            setPredictions(predictedWords);
        }
    };

    useEffect(() => {
        // Call updatePredictions whenever the text input changes
        if (model != null) {
            updatePredictions();
        }
    }, [userInput]);

    return (
        <div style={{ padding: '20px', textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
            <h1>Wortvorhersage mit TensorFlow.js</h1>
            <Select value={selectedModel} onChange={handleModelChange}>
                <MenuItem value="ffnn">FFNN</MenuItem>
                <MenuItem value="rnn">RNN</MenuItem>
                {/* Add more models as needed */}
            </Select>

            <TextField
                multiline
                rows={4}
                fullWidth
                placeholder="Geben Sie hier Ihren Text ein..."
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                style={{ marginBottom: '20px' }}
            />

            <div style={{ marginBottom: '20px' }}>
                <h4>Vorschläge für das nächste Wort:</h4>
                <List>
                    {predictions.map((word, index) => (
                        <ListItem key={index}>{word}</ListItem>
                    ))}
                </List>
            </div>

        </div>
    );
};

export default WordPredictionApp;
