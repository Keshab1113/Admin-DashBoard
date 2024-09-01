import React from 'react';
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const TableChart = () => {
    const system = useSelector((state) => state.user.systems);
    const location = useLocation();
    const getIdFromPath = () => {
        const pathSegments = location.pathname.split("/").filter(Boolean);
        return pathSegments[1];
    };
    const id = getIdFromPath();
    const device = system.find((item) => item._id === id);
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
                        {device.params.map((item) => (
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
