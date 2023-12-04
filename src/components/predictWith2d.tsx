import React, { useEffect, useState } from "react";
import * as tf from "@tensorflow/tfjs";
import { Scatter } from "react-chartjs-2";
import 'chart.js/auto'
import {
    Chart as ChartJS,
    LinearScale,
    LineElement,
    PointElement,
    CategoryScale
} from 'chart.js';
ChartJS.register(LinearScale, LineElement, PointElement, CategoryScale);

function PredictWith2d() {
    const [scatterData, setScatterData] = useState([]);
    const [scatterDataTrain, setScatterDataTrain] = useState([]);
    const [originalPoints, setOriginalPoints] = useState([]);
    const [predictedPoints, setPredictedPoints] = useState([]);
    const [modelSummary, setModelSummary] = useState(null);

    useEffect(() => {
        const generateData = (numPoints, variance) => {
            setScatterData([]);

            const xValues = tf.randomUniform([numPoints], -1, 1);
            const xValuesTensor2D = tf.reshape(xValues, [numPoints, 1]);

            const yValuesWithoutNoise = (xValues.add(tf.scalar(0.8)))
                .mul(xValues.sub(tf.scalar(0.2)))
                .mul(xValues.sub(tf.scalar(0.3)))
                .mul(xValues.sub(tf.scalar(0.6)))
                .add(tf.randomNormal([numPoints], 0, Math.sqrt(variance)));

            const yValuesWithNoise = yValuesWithoutNoise.add(tf.randomNormal([numPoints], 0, Math.sqrt(variance)));

            return { x: xValuesTensor2D, y: yValuesWithNoise };
        };

        function createModel(numHiddenLayers, numNeuronsPerLayer, activationFunction, learningRate, optimizer) {
            const model = tf.sequential();

            // Add input layer
            model.add(tf.layers.dense({ inputShape: [1], units: numNeuronsPerLayer, useBias: true, activation: activationFunction }));

            // Add hidden layers
            for (let i = 0; i < numHiddenLayers; i++) {
                model.add(tf.layers.dense({ units: numNeuronsPerLayer, useBias: true, activation: activationFunction }));
            }

            // Add output layer
            model.add(tf.layers.dense({ units: 1, useBias: true }));

            model.compile({ loss: 'meanSquaredError', optimizer: tf.train[optimizer](learningRate) });

            return model;
        }

        function convertToTensor(data) {
            return tf.tidy(() => {
                tf.util.shuffle(data);
                const inputs = data.x.arraySync();
                const labels = data.y.arraySync();

                const inputTensor = tf.tensor2d(inputs, [inputs.length, 1]);
                const labelTensor = tf.tensor2d(labels, [labels.length, 1]);

                const inputMax = inputTensor.max();
                const inputMin = inputTensor.min();
                const labelMax = labelTensor.max();
                const labelMin = labelTensor.min();

                const normalizedInputs = inputTensor.sub(inputMin).div(inputMax.sub(inputMin));
                const normalizedLabels = labelTensor.sub(labelMin).div(labelMax.sub(labelMin));

                return {
                    inputs: normalizedInputs,
                    labels: normalizedLabels,
                    inputMax,
                    inputMin,
                    labelMax,
                    labelMin,
                };
            });
        }

        async function trainModel(model, inputs, labels, epochs) {
            setScatterDataTrain([]);

            model.compile({
                optimizer: tf.train.adam(),
                loss: tf.losses.meanSquaredError,
                metrics: ['mse'],
            });

            const batchSize = 32;

            await model.fit(inputs, labels, {
                batchSize,
                epochs,
                shuffle: true,
                callbacks: {
                    onEpochEnd: (epoch, logs) => {
                        setScatterDataTrain(prevData => [...prevData, { x: epoch, y: logs.loss }]);
                    }
                }
            });

        }

        function testModel(model, inputData, normalizationData) {
            const { inputMax, inputMin, labelMin, labelMax } = normalizationData;

            const [xs, preds] = tf.tidy(() => {
                const xsNorm = tf.linspace(-1, 1, 100);
                const predictions = model.predict(xsNorm.reshape([100, 1]));

                const unNormXs = xsNorm.mul(inputMax.sub(inputMin)).add(inputMin);
                const unNormPreds = predictions.mul(labelMax.sub(labelMin)).add(labelMin);

                return [unNormXs.dataSync(), unNormPreds.dataSync()];
            });

            const predictedPoints = Array.from(xs).map((val, i) => ({
                x: val,
                y: preds[i]
            }));
            setPredictedPoints(predictedPoints);
            const originalPoints = inputData.map(d => ({
                x: d.x,
                y: d.y
            }));
            setOriginalPoints(originalPoints);

        };

        async function run() {
            const numPoints = 100;
            const variance = 0.1;
            const data = generateData(numPoints, variance);

            const scatterData = Array.from(data.x.dataSync()).map((x, i) => ({
                x: x,
                y: data.y.dataSync()[i]
            }));

            setScatterData(scatterData);
            // Experiment with different parameters
            const numHiddenLayers = 3;
            const numNeuronsPerLayer = 10;
            const activationFunction = 'relu';
            const learningRate = 0.01;
            const optimizer = 'sgd';
            const numEpochs = 50;

            const model = createModel(numHiddenLayers, numNeuronsPerLayer, activationFunction, learningRate, optimizer);

            const summary = getModelSummary(model);
            setModelSummary(summary);

            const tensorData = convertToTensor(data);
            const { inputs, labels } = tensorData;

            await trainModel(model, inputs, labels, numEpochs).then(() => {
                console.log('Done Training');
                testModel(model, scatterData, tensorData);
            });
        }

        function getModelSummary(model) {
            const layers = model.layers.map(layer => {
                const layerConfig = layer.getConfig();
                const outputShape = layer.outputShape;
                const numParams = layer.countParams();
                const trainable = layer.trainable;

                return {
                    name: layer.name,
                    type: layerConfig.className,
                    outputShape: outputShape,
                    numParams: numParams,
                    trainable: trainable
                };
            });

            return layers;
        }

        run();
    }, []);

    const data = {
        datasets: [
            {
                label: 'Dataset',
                data: scatterData,
                backgroundColor: 'rgba(75,192,192,0.4)',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
            }
        ]
    };
    const dataTrain = {
        datasets: [
            {
                label: 'Training Performance',
                data: scatterDataTrain,
                backgroundColor: 'rgba(75,192,192,0.4)',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
            }
        ]
    };
    const testData = {
        datasets: [
            {
                label: 'Original Data',
                data: originalPoints,
                borderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: 'rgba(75,192,192,1)',
                pointBorderColor: '#fff',
                pointRadius: 5,
            },
            {
                label: 'Predicted Data',
                data: predictedPoints,
                borderColor: 'rgba(255,99,132,1)',
                pointBackgroundColor: 'rgba(255,99,132,1)',
                pointBorderColor: '#fff',
                pointBorderWidth: 1,
                pointRadius: 5,
            }
        ]
    };

    const options = {
        plugins: {
            legend: {
                display: true
            }
        },
        scales: {
            x: {
                min: -1,
                max: 1.5
            },
            y: {
                min: -1.5,
                max: 1.5
            }
        }
    };

    return (
        <div>
            <h2>Detailed Model Summary</h2>
            <div style={{
                display: 'flex', marginTop: '100px', marginLeft: '50px', flexDirection: 'row',
            }}>

                <div style={{
                    flexDirection: 'column',
                    minWidth: '500px',
                }} >

                    <Scatter data={dataTrain} />
                    <Scatter data={testData} options={options} /> <Scatter data={data} options={options} />
                </div>
                <div style={{
                    marginLeft: '50px', marginTop: '100px',
                }}>
                    <table>
                        <thead>
                            <tr>
                                <th>Layer Name</th>
                                <th>Type</th>
                                <th>Output Shape</th>
                                <th># Of Params</th>
                                <th>Trainable?</th>
                            </tr>
                        </thead>
                        <tbody>
                            {modelSummary &&
                                modelSummary.map((layer, index) => (
                                    <tr key={index}>
                                        <td>{layer.name}</td>
                                        <td>{layer.type}</td>
                                        <td>{JSON.stringify(layer.outputShape)}</td>
                                        <td>{layer.numParams}</td>
                                        <td>{layer.trainable.toString()}</td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
}

export default PredictWith2d;
