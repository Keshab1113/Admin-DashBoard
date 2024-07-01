import React, { PureComponent } from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Brush,
    AreaChart,
    Area,
    ResponsiveContainer,
} from 'recharts';

const data = [
    {
        name: 'Age 10',
        kv: 4000,
        llv: 2400,
        tma: 2400,
    },
    {
        name: 'Age 20',
        kv: 3000,
        llv: 1398,
        tma: 2210,
    },
    {
        name: 'Age 30',
        kv: 2000,
        llv: 9800,
        tma: 2290,
    },
    {
        name: 'Age 40',
        kv: 2780,
        llv: 3908,
        tma: 2000,
    },
    {
        name: 'Age 45',
        kv: 1890,
        llv: 4800,
        tma: 2181,
    },
    {
        name: 'Age 50',
        kv: 2390,
        llv: 3800,
        tma: 2500,
    },
    {
        name: 'Age 55',
        kv: 3490,
        llv: 4300,
        tma: 2100,
    },
    {
        name: 'Age 17',
        kv: 3500,
        llv: 1298,
        tma: 2210,
    },
    {
        name: 'Age 22',
        kv: 5000,
        llv: 9800,
        tma: 2290,
    },
    {
        name: 'Age J',
        kv: 2780,
        llv: 3908,
        tma: 2000,
    },
    {
        name: 'Age K',
        kv: 1890,
        llv: 5800,
        tma: 2181,
    },
    {
        name: 'Age L',
        kv: 2390,
        llv: 3800,
        tma: 2500,
    },
    {
        name: 'Age M',
        kv: 5490,
        llv: 4300,
        tma: 2100,
    },
    {
        name: 'Age N',
        kv: 3000,
        llv: 1398,
        tma: 2210,
    },
    {
        name: 'Age O',
        kv: 2000,
        llv: 9800,
        tma: 2290,
    },
    {
        name: 'Age P',
        kv: 2780,
        llv: 3908,
        tma: 2000,
    },
    {
        name: 'Age Q',
        kv: 1890,
        llv: 4800,
        tma: 2181,
    },
    {
        name: 'Age R',
        kv: 2390,
        llv: 3800,
        tma: 2500,
    },
    {
        name: 'Age S',
        kv: 3490,
        llv: 4300,
        tma: 2100,
    },
    {
        name: 'Age T',
        kv: 2780,
        llv: 3908,
        tma: 2000,
    },
    {
        name: 'Age U',
        kv: 1890,
        llv: 4800,
        tma: 2181,
    },
    {
        name: 'Age V',
        kv: 2390,
        llv: 3800,
        tma: 2500,
    },
    {
        name: 'Age W',
        kv: 3490,
        llv: 4300,
        tma: 2100,
    },
    {
        name: 'Age X',
        kv: 3490,
        llv: 4300,
        tma: 2100,
    },
    {
        name: 'Age Y',
        kv: 3490,
        llv: 4300,
        tma: 2100,
    },
    {
        name: 'Age Z',
        kv: 3490,
        llv: 4300,
        tma: 2100,
    },
];

export default class Example extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/synchronized-line-charts-zc3nl';

    render() {
        return (
            <div style={{ width: '100%' }}>

                <ResponsiveContainer width="100%" height={200}>
                    <LineChart
                        width={500}
                        height={200}
                        data={data}
                        syncId="anyId"
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="kv" stroke="#8884d8" fill="#8884d8" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        );
    }
}
