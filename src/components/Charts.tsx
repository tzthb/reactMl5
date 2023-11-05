import React from "react";
import GaugeChart from "react-gauge-chart";

type ChartProps = {
    data: {
        confidence: number;
    };
};

const Chart = ({ data }: ChartProps) => {
    const confidence = Math.floor(data.confidence * 10000) / 10000;

    return (
        <div style={{ height: '50px', maxWidth: '150px' }}>
            <GaugeChart
                id="gauge-chart3"
                nrOfLevels={3}
                colors={["#FF5F6D", "#FFC371", "rgb(26 202 26)"]}
                percent={confidence}
                style={{ width: "10rem", height: "10rem", margin: 'auto' }}
            />
        </div>
    );
};
export default Chart;