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

const DoubleBarChart = ({ data }) => {
    const chartData = {
        labels: data.map(item => item.n), // Sensor names as labels
        datasets: [
            {
                label: 'Current Values',
                data: data.map(item => item.v), // Current sensor values
                backgroundColor: 'rgba(75, 192, 192, 0.6)', // Color for the first dataset
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
            {
                label: 'Max Possible Value', // Assuming 100 as a max possible value for comparison
                data: data.map(() => 100), // Maximum possible value
                backgroundColor: 'rgba(255, 99, 132, 0.6)', // Color for the second dataset
                borderColor: 'rgba(255, 99, 132, 1)',
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
                text: 'Sensor Data Comparison',
            },
        },
        scales: {
            y: {
                beginAtZero: true,
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

export default DoubleBarChart;
