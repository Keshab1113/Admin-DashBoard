import React, { PureComponent } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { x: 100, y: 200, z: 200 },
    { x: 120, y: 100, z: 160 },
    { x: 170, y: 200, z: 100 },
    { x: 140, y: 180, z: 180 },
    { x: 150, y: 200, z: 200 },
    { x: 110, y: 180, z: 200 },
    { x: 100, y: 50, z: 200 },
    { x: 120, y: 50, z: 160 },
    { x: 90, y: 80, z: 100 },
    { x: 10, y: 180, z: 180 },
    { x: 50, y: 200, z: 20 },
    { x: 10, y: 50, z: 200 },
];

export default class Example extends PureComponent {

    render() {
        return (
            <ResponsiveContainer width="100%" className=" p-4">
                <ScatterChart
                    margin={{
                        top: 10,
                        right: 20,
                        bottom: 50,
                        left: 20,
                    }}
                >
                    <CartesianGrid />
                    <XAxis type="number" dataKey="x" name="stature" unit="cm" />
                    <YAxis type="number" dataKey="y" name="weight" unit="kg" />
                    <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                    <Scatter name="A school" data={data} fill="#8884d8" />
                </ScatterChart>
            </ResponsiveContainer>
        );
    }
}
