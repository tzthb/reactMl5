import React, { useState, useEffect } from 'react';
import * as tf from '@tensorflow/tfjs';

function TrainModelComponent() {
    const [textData, setTextData] = useState('');
    const [wordIndex, setWordIndex] = useState({});
    const [totalWords, setTotalWords] = useState(0);
    const [trainingLogs, setTrainingLogs] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/your-text-file.txt');
                const data = await response.text();
                setTextData(data);
            } catch (error) {
                console.error('Error fetching text file:', error);
            }
        };

        fetchData();
    }, []);

    const handleTrainButtonClick = async () => {
        // Manual tokenization and building word index
        console.log(textData);
        const words = textData.split(' ');
        const uniqueWords = Array.from(new Set(words));
        const wordIndex = Object.fromEntries(uniqueWords.map((word, index) => [word, index + 1]));
        console.log(uniqueWords.length);


        // Set word index and total words in the state
        setWordIndex(wordIndex);
        setTotalWords(uniqueWords.length);

        // Convert text to numerical data
        const numericalData = words.map(word => (wordIndex[word] !== undefined ? wordIndex[word] : 0));

        // Convert data to tensors
        const X = tf.tensor2d(numericalData, [1, numericalData.length]);


        // Dummy example: Assuming y is a random tensor for demonstration purposes
        const y = tf.randomNormal([1, uniqueWords.length]);

        // Define the model
        const model = tf.sequential();
        model.add(tf.layers.embedding({ inputDim: totalWords, outputDim: 100, inputLength: numericalData.length }));
        model.add(tf.layers.lstm({ units: 100, returnSequences: true, activation: 'relu' }));
        model.add(tf.layers.lstm({ units: 50, activation: 'relu' }));
        model.add(tf.layers.dense({ units: 512, activation: 'relu' }));
        model.add(tf.layers.dense({ units: 256, activation: 'relu' }));
        model.add(tf.layers.dense({ units: totalWords, activation: 'softmax' }));


        // Callback to capture training logs
        const trainingCallback = {
            onEpochEnd: (epoch, logs) => {
                setTrainingLogs(`Epoch ${epoch + 1}/${logs.epoch} - Loss: ${logs.loss}, Accuracy: ${logs.acc}`);
            },
        };

        // Display model summary
        model.summary();

        // Compile the model
        model.compile({ loss: 'categoricalCrossentropy', optimizer: 'adam', metrics: ['accuracy'] });



        // Train the model
        await model.fit(X, y, {
            epochs: 100,
            batchSize: 32,
            callbacks: [trainingCallback],
        });

        // Save the model
        await model.save('localstorage://tfjs-model');
    };

    return (
        <div>
            <h1>Train Model</h1>
            <button onClick={handleTrainButtonClick}>Train Model</button>
            <div>
                <h2>Training Logs</h2>
                <pre>{trainingLogs}</pre>
            </div>
        </div>
    );
}

export default TrainModelComponent;
