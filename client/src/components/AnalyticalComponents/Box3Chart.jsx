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
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Box3Chart = () => {
    const system = useSelector((state) => state.user.systems);
    const location = useLocation();
    const getIdFromPath = () => {
        const pathSegments = location.pathname.split("/").filter(Boolean);
        return pathSegments[1];
    };
    const id = getIdFromPath();
    const device = system.find((item) => item._id === id);
    const labels = device.params.map(item => item.n);

    const chartData = {
        labels,
        datasets: [
            {
                label: 'Sensor Values',
                data: device.params.map(item => item.v),
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true,
                tension: 0.4,
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
        <div className="flex justify-center items-center h-full dark:bg-slate-800 mb-10 mt-4">
            <div className="w-full max-w-lg">
                <Line data={chartData} options={options} />
            </div>
        </div>
    );
};

export default Box3Chart;
