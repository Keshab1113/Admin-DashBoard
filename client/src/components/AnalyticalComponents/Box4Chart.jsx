import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    ArcElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    ArcElement,  // Register ArcElement for Pie chart
    Title,
    Tooltip,
    Legend
);

const Box4Chart = ({ data }) => {
    const chartData = {
        labels: data.map(item => item.n),
        datasets: [
            {
                label: 'Values',
                data: data.map(item => item.v),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                    'rgba(75, 192, 192, 0.5)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                ],
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
                text: 'Sensor Data',
            },
        },
    };

    return (
        <div className="flex justify-center items-center h-fit w-full bg-gray-100 dark:bg-slate-800">
            <div className="w-full max-w-lg">
                <Pie data={chartData} options={options} />
            </div>
        </div>
    );
};

export default Box4Chart;
