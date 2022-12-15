import { Link } from "react-router-dom";
import axios from "axios";
import { errorMessage, sweetAlert } from "./alert";

// view user
const viewUser = async (_id) => {
  localStorage.removeItem("userId");
  localStorage.removeItem("carId");
  localStorage.removeItem("orderId");
  localStorage.setItem("userId", _id);
};

// delete car from table
const deleteCar = async (_id) => {
  try {
    // axios with header
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    };
    const res = await axios.delete(`/admin/deleteCar/${_id}`, config);
  } catch (error) {
    errorMessage(error.response.data.message);
  }
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
          <Link to="/users/id" style={{ textDecoration: "none" }}>
            <div
              className="updateButton"
              // onClick={() => deleteCar(params.row._id)}
            >
              Update
            </div>
          </Link>
          <div
            className="deleteButton"
            // onClick={() => deleteCar(params.row._id)}
            onClick={()=>{
              sweetAlert({
                title: "Are you sure?",
                message: "Once deleted, you will not be able to recover this car!",
                deleteCar: () => deleteCar(params.row._id),
              });
            }}
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
          <div className="acceptButton">Accept</div>
          <div
            className="deleteButton"
            //   onClick={() => handleDelete(params.row._id)}
          >
            Cancel
          </div>
        </div>
      );
    },
  },
];
