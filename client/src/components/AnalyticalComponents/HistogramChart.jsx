import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const HistogramChart = ({ data }) => {
    // Grouping the data into ranges for the histogram
    const valueRanges = [0, 10, 20, 30, 40, 50]; // Define the ranges
    const histogramData = valueRanges.map((range, index) => {
        if (index === valueRanges.length - 1) return null;
        return data.filter(item => item.v >= range && item.v < valueRanges[index + 1]).length;
    }).filter(val => val !== null);

    const chartData = {
        labels: valueRanges.slice(0, -1).map((range, index) => `${range} - ${valueRanges[index + 1]}`),
        datasets: [
            {
                label: 'Frequency',
                data: histogramData,
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Sensor Value Distribution Histogram',
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 1, // Adjust the step size for the y-axis
                },
            },
        },
    };

    return (
        <div className="flex justify-center items-center h-full bg-gray-100">
            <div className="w-full max-w-lg">
                <Bar data={chartData} options={options} />
            </div>
        </div>
    );
};

export default HistogramChart;