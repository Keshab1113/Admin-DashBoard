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
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const DoubleBarChart = () => {

    const system = useSelector((state) => state.user.systems);
    const location = useLocation();
    const getIdFromPath = () => {
        const pathSegments = location.pathname.split("/").filter(Boolean);
        return pathSegments[1];
    };
    const id = getIdFromPath();
    const device = system.find((item) => item._id === id);

    const chartData = {
        labels: device.params.map(item => item.n),
        datasets: [
            {
                label: 'Current Values',
                data: device.params.map(item => item.v),
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
            {
                label: 'Max Possible Value',
                data: device.params.map(() => 100),
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
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
