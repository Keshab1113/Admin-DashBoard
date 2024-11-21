import React, { useState, useEffect } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
    { field: "Date", headerName: "Date", width: 150 },
    { field: "Username", headerName: "Username", width: 150 },
    { field: "Email", headerName: "Email", width: 180 },
    { field: "number", headerName: "Phone Number", width: 150 },
    { field: "Admin", headerName: "Admin", width: 80 },
    { field: "Address", headerName: "Address", width: 250 },
    {
        field: "edit",
        headerName: "Actions",
        width: 120,
        renderCell: (params) => (
            <button
                onClick={() => handleEdit(params.row)}
                className="text-blue-500 underline hover:text-blue-700"
            >
                Edit
            </button>
        ),
    },
];

const handleEdit = (user) => {
    alert(`Editing user: ${user.Username}`);
};

const AllUsers = () => {
    const [rows, setRows] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_BACKEND_URL}/api/auth/allusers`
                );
                const fetchedData = response.data.users.map((user, index) => ({
                    id: index + 1,
                    Date: new Date(user.createdAt).toLocaleDateString(),
                    Username: user.username,
                    Email: user.email,
                    number: user.phone || "N/A",
                    Admin: user.isAdmin ? "Yes" : "No",
                    Address: user.address || "N/A",
                }));
                setRows(fetchedData);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching users:", error);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="mt-[10vh] min-h-screen dark:text-white flex flex-col items-center dark:bg-slate-900">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Dashboard - All Users</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className="w-full">
                <h1 className="text-4xl font-bold p-4 text-center">All Users</h1>
            </div>
            <div
                style={{ height: 340, width: "90%", marginTop: 10 }}
                className="rounded-xl shadow-lg p-4 bg-white overflow-hidden"
            >
                <DataGrid
                    rows={rows}
                    columns={columns}
                    loading={loading}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 4 },
                        },
                    }}
                    pageSizeOptions={[4, 10]}
                    checkboxSelection
                    className="text-gray-800 rounded-lg"
                />
            </div>
        </div>
    );
};

export default AllUsers;
