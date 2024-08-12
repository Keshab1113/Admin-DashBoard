import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const Box2Chart = ({ data }) => {
    return (
        <div className="flex flex-wrap justify-center items-center gap-4 bg-gray-100 dark:bg-slate-800 p-4">
            {data.map((item) => {
                const chartData = {
                    datasets: [
                        {
                            data: [item.v, 100 - item.v],  // Assuming 100 is the max value
                            backgroundColor: [
                                'rgba(54, 162, 235, 1)',  // Filled part color
                                'rgba(200, 200, 200, 0.5)',  // Background color for the rest
                            ],
                            borderWidth: 0,
                            circumference: 180,
                            rotation: -90,
                        },
                    ],
                };

                const options = {
                    responsive: true,
                    cutout: '80%',
                    plugins: {
                        legend: {
                            display: false,
                        },
                        tooltip: {
                            enabled: false,
                        },
                    },
                };

                return (
                    <div key={item.id} className="w-full max-w-xs relative">
                        <Doughnut data={chartData} options={options} />
                        <div className="absolute inset-0 flex flex-col justify-center items-center">
                            <span className="text-lg font-semibold text-slate-700 dark:text-white">{item.n}</span>
                            <span className="text-2xl font-semibold text-slate-700 dark:text-white">{`${item.v} ${item.u}`}</span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Box2Chart;
