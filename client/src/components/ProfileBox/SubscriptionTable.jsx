import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "Date", headerName: "Date", width: 70 },
  { field: "Device", headerName: "Device", type: "number", width: 50 },
  { field: "Rate", headerName: "Rate", type: "number", width: 70 },
  {
    field: "Amount",
    headerName: "Amount",
    type: "number",
    width: 80,
  },
  {
    field: "PaymentMethod",
    headerName: "PaymentMethod",
    width: 80,
  },
  {
    field: "Status",
    headerName: "Status",
    width: 80,
  },
];

const rows = [
  {
    id: 1,
    Date: "2023-07-09",
    Device: 5,
    Rate: 500,
    Amount: 2500,
    PaymentMethod: "UPI",
    Status: "success",
  },
  {
    id: 2,
    Date: "2023-07-09",
    Device: 5,
    Rate: 500,
    Amount: 2500,
    PaymentMethod: "UPI",
    Status: "success",
  },
  {
    id: 3,
    Date: "2023-07-09",
    Device: 5,
    Rate: 500,
    Amount: 2500,
    PaymentMethod: "UPI",
    Status: "success",
  },
  {
    id: 4,
    Date: "2023-07-09",
    Device: 5,
    Rate: 500,
    Amount: 2500,
    PaymentMethod: "UPI",
    Status: "success",
  },
];

export default function DataTable() {
  return (
    <div style={{ height: 340, width: "100%", marginTop: 10 }} className="hideScrollBar">
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 4 },
          },
        }}
        pageSizeOptions={[4, 10]}
              checkboxSelection
              className=" text-black bg-white"
      />
    </div>
  );
}
