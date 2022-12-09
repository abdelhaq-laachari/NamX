import { Link } from "react-router-dom";

const viewUser = async (_id) => {
  localStorage.removeItem("userId");
  localStorage.removeItem("carId");
  localStorage.removeItem("orderId");
  localStorage.setItem("userId", _id);
};

export const userAction = [
  {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="cellAction">
          <Link to="/users/single" style={{ textDecoration: "none" }}>
            <div
              className="viewButton"
              onClick={() => viewUser(params.row._id)}
            >
              View
            </div>
          </Link>
        </div>
      );
    },
  },
];

// car action table
export const carAction = [
  {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="cellAction">
          {/* <Link to="/users/id" style={{ textDecoration: "none" }}>
              <div
                className="viewButton"
                onClick={() => viewUser(params.row._id)}
              >
                View
              </div>
            </Link> */}
          <div
            className="deleteButton"
            //   onClick={() => handleDelete(params.row._id)}
          >
            Delete
          </div>
        </div>
      );
    },
  },
];

// order action table
export const orderAction = [
  {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="cellAction">
          {/* <div className="acceptButton">Accept</div>
          <div
            className="deleteButton"
              // onClick={() => handleDelete(params.row._id)}
          >
            Cancel
          </div> */}
         
            <Link to="/users/single" style={{ textDecoration: "none" }}>
              <div
                className="viewButton"
                onClick={() => viewUser(params.row._id)}
              >
                Details
              </div>
            </Link>
          </div>
        
      );
    },
  },
];
