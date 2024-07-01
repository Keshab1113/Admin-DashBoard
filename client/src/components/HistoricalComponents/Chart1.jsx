import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
    {
        name: 'Page H',
        uv: 3500,
        pv: 1298,
        amt: 2210,
    },
    {
        name: 'Page I',
        uv: 5000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page J',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page K',
        uv: 1890,
        pv: 5800,
        amt: 2181,
    },
    {
        name: 'Page L',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page M',
        uv: 5490,
        pv: 4300,
        amt: 2100,
    },
    {
        name: 'Page N',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page O',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page P',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page Q',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page R',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page S',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

export default class Example extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/synchronized-area-chart-kpg1s';

    render() {
        return (
            <div style={{ width: '100%' }}>
                

                <ResponsiveContainer width="100%" height={200}>
                    <AreaChart
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
                        <Area type="monotone" dataKey="pv" stroke="#82ca9d" fill="#82ca9d" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        );
    }
}
