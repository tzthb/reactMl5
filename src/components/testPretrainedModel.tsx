import React, { useEffect, useRef, useState } from "react";
import * as tf from "@tensorflow/tfjs";
import Button from '@mui/material/Button';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";

Chart.register(CategoryScale);

function TestPretrainedModel() {

    const [model, setModel] = useState<tf.LayersModel | null>(null);
    const [noiseVariance, setNoiseVariance] = useState<number>(0.1);
    const [chartData, setChartData] = useState<any>(null);
    const [isModelTrained, setIsModelTrained] = useState(false);

    const fileInputRef = useRef();

    const handleUpload = async (event) => {
        const file = event.target.files[0];
        if (file) {
            try {
                const model = await tf.loadLayersModel(URL.createObjectURL(file));
                setModel(model);
                console.log('Loaded Model' + model.summary());
            } catch (error) {
                console.error('Error loading model', error);
            }
        }
    };

    // Data generation function
    const generateData = (N: number, variance: number) => {
        const xValues = tf.randomUniform([N], -1, 1).dataSync();
        const yValues = xValues.map((x) => {
            const noise = tf.randomNormal([1], 0, variance).dataSync()[0];
            return (x + 0.8) * (x - 0.2) * (x - 0.3) * (x - 0.6) + noise;
        });
        return { x: tf.tensor1d(xValues), y: tf.tensor1d(yValues) };
    };

    const testModel = () => {
        if (!model) {
            console.error("Model not trained yet.");
            return;
        }

        // Generate test data
        const testData = generateData(20, noiseVariance);

        // Predict using the trained model
        const predictions = model.predict(testData.x) as tf.Tensor;

        // Display results
        predictions.print();

        // Plot the data
        const xValues = testData.x.dataSync();
        const yValues = testData.y.dataSync();

        const predictedValues = predictions.dataSync();
        const chartData = {
            datasets: [
                {
                    label: 'Original Data',
                    data: testData.x.arraySync().map((x, i) => ({
                        x: x,
                        y: predictions.arraySync()[i],
                    })),
                    borderColor: 'rgb(255, 99, 132)',
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                    showLine: false,
                    pointRadius: 5,
                },

                {
                    label: 'Predicted Data',
                    data: xValues.map((x, i) => Number(x)),
                    borderColor: 'rgb(54, 162, 235)',
                    backgroundColor: 'rgba(54, 162, 235, 0.5)',
                    showLine: true,
                },
            ],
        };
        setChartData(chartData);

    };


    useEffect(() => {
        setIsModelTrained(false);
    }, [noiseVariance]);

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Upload and Test a Model</h1>
            <div>Upload a pretrained model and test it with new data.</div>
            <br />
            <div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'center', marginLeft: '150px' }}>
                <input type="file" ref={fileInputRef} onChange={handleUpload} />
            </div>
            <br />
            <div className="button-container">
                <Button variant="contained" style={{ backgroundColor: '#9a656b', color: 'white' }} disabled={!isModelTrained} onClick={() => testModel()}>Test Model</Button>
            </div>
        </div>
    );
};

export default TestPretrainedModel;
