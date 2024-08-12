import React from 'react';

const TableChart = ({ data }) => {
    return (
        <div className="flex justify-center items-center h-full bg-gray-100 p-4">
            <div className="w-full max-w-lg">
                <table className="min-w-full bg-white border border-gray-200 text-black">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b">ID</th>
                            <th className="py-2 px-4 border-b">Name</th>
                            <th className="py-2 px-4 border-b">Unit</th>
                            <th className="py-2 px-4 border-b">Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item.id}>
                                <td className="py-2 px-4 border-b">{item.id}</td>
                                <td className="py-2 px-4 border-b">{item.n}</td>
                                <td className="py-2 px-4 border-b">{item.u}</td>
                                <td className="py-2 px-4 border-b">{item.v}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TableChart;
