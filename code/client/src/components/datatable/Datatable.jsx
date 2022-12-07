import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { carColumns, userColumns, orderColumns } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Datatable = ({ data }) => {
  const path = window.location.pathname.split("/")[1];
  const handleDelete = (_id) => {
    data.filter((item) => item._id !== _id);
  };

  // add switch statement to handle different paths
 const switchFunction = () => {
  switch (path) {
    case "users":
      return (
        userColumns.concat(actionColumn)
      );
    case "cars":
      return (
        carColumns.concat(actionColumn)
      );
    case "orders":
      return (
        orderColumns.concat(actionColumn)
      );
    default:
  }
}
      

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/id" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row._id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">All New Users</div>
      <DataGrid
        className="datagrid"
        getRowId={(row) => row._id}
        rows={data}
        // columns={
        //   path === "users"
        //     ? userColumns.concat(actionColumn)
        //     : path === "cars" && carColumns.concat(actionColumn)
        // }
        columns={switchFunction()}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
