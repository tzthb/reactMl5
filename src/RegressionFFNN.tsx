// src/components/TensorFlowComponent.tsx
import React, { useEffect, useState } from "react";
import * as tf from "@tensorflow/tfjs";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import './RegressionFFNN.css';
import PredictWith2d from "./components/predictWith2d";
import TestPretrainedModel from "./components/testPretrainedModel";
import { Box, Tab, Tabs, } from "@mui/material";
import TrainModel from "./components/trainModel";
import Underfitting from "./components/underfitting";
Chart.register(CategoryScale);

const RegressionFFNN: React.FC = () => {

    const [model, setModel] = useState<tf.LayersModel | null>(null);
    const [experimentType, setExperimentType] = useState<string>('best-fit'); // 'under-fit', 'over-fit'
    const [noiseVariance, setNoiseVariance] = useState<number>(0.1);
    const [chartData, setChartData] = useState<any>(null);
    const [isModelTrained, setIsModelTrained] = useState(false);
    const [selectedTab, setSelectedTab] = useState('UploadPretrainedModel');

    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
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

    // Model creation function
    const createModel = () => {
        const newModel = tf.sequential();
        // Experiment with different architecture
        newModel.add(tf.layers.dense({ units: 10, activation: 'relu', inputShape: [1] }));
        newModel.add(tf.layers.dense({ units: 1 }));
        newModel.compile({ optimizer: tf.train.adam(), loss: 'meanSquaredError' });
        console.log('Created Model' + newModel.summary());
        return newModel;
    };

    // Train the model
    const trainModel = async (data: { x: tf.Tensor1D, y: tf.Tensor1D }) => {
        const newModel = createModel();
        await newModel.fit(data.x, data.y, { epochs: 100 });

        // Set the trained model to the state
        setModel(newModel);

        // Generate test data for chart
        const testData = generateData(20, noiseVariance);
        const predictions = newModel.predict(testData.x) as tf.Tensor;
        const chartData = {
            datasets: [
                {
                    label: 'Actual Data',
                    borderColor: 'rgba(75,192,192,1)',
                    pointBackgroundColor: 'rgba(75,192,192,1)',
                    pointBorderColor: '#fff',
                    data: testData,
                },
                {
                    label: 'Predicted Data',
                    borderColor: 'rgba(255,99,132,1)',
                    pointBackgroundColor: 'rgba(255,99,132,1)',
                    pointBorderColor: '#fff',
                    data: {
                        x: testData.x.arraySync(),
                        y: predictions.arraySync(),
                    },
                },
            ],
        };
        setChartData(chartData);
        setIsModelTrained(true);
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
        // Generate training data with N=50 and variance=0.1
        const trainingData = generateData(50, 0.1);

        // Train the model with generated data
        trainModel(trainingData);
    }, []);

    useEffect(() => {
        setIsModelTrained(false);
    }, [noiseVariance]);

    async function loadModel() {
        const model = await tf.loadLayersModel('src/images/my-model-2.json');
        setModel(model);
        console.log('Pretrained Loaded Model' + model.summary());
        return model;
    }


    return (
        <div style={{ textAlign: 'center', display: 'flex' }}>
            <Box sx={{ width: '100%' }}>
                <Tabs
                    style={{
                        display: 'flex', width: '1000px', background: 'rgba(221, 204, 207, 1)', color: 'white',
                    }}
                    value={selectedTab}
                    onChange={handleChange}
                    textColor="secondary"
                    indicatorColor="secondary"
                    aria-label="secondary tabs example"
                >
                    <Tab value="UploadPretrainedModel" label="Upload Pretrained Model" />
                    <Tab value="TrainModel" label="Pretrained Model" />
                    <Tab value="TestPretrainedModel" label="Train Your own Model" />

                </Tabs>

                {selectedTab === 'UploadPretrainedModel' && <TestPretrainedModel />}
                {selectedTab === 'TrainModel' && <PredictWith2d />}
                {selectedTab === 'TestPretrainedModel' && <TrainModel />}

            </Box>

        </div>
    );
};

export default RegressionFFNN;
