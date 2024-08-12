import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const Box3Chart = ({ data }) => {
    const labels = data.map(item => item.n); // Using sensor names as labels

    const chartData = {
        labels, // Labels for the x-axis
        datasets: [
            {
                label: 'Sensor Values',
                data: data.map(item => item.v), // Sensor values
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true,
                tension: 0.4, // Curve the line
                pointBackgroundColor: 'rgba(75, 192, 192, 1)',
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
                text: 'Sensor Data Over Time',
            },
        },
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div className="flex justify-center items-center h-full bg-gray-100 dark:bg-slate-800">
            <div className="w-full max-w-lg">
                <Line data={chartData} options={options} />
            </div>
        </div>
    );
};

export default Box3Chart;
