import "./order.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import axios from "axios";
import { successMessage } from "../../alert";
import { config } from "../../getToken";

const Order = ({ inputs, title }) => {
  const [file, setFile] = useState("");
  const [info, setInfo] = useState({});
  const path = window.location.pathname.split("/")[1];

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = {
        ...info,
      };
      const res = await axios.post("/admin/addCars", formData, config);
      if (res) {
        successMessage("Car added successfully");
        // go to cars page after time out
        setTimeout(() => {
          window.location.replace("/cars");
        }, 2000);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="container">
            <h2>Car Details</h2>
            <div className="details">
              <div className="detail">
                <h3>Horse power</h3>
                <span>500 km</span>
              </div>
              <div className="detail">
                <h3>Horse power</h3>
                <span>500 km</span>
              </div>
              <div className="detail">
                <h3>Horse power</h3>
                <span>500 km</span>
              </div>
              <div className="detail">
                <h3>Horse power</h3>
                <span>500 km</span>
              </div>
              <div className="detail">
                <h3>Horse power</h3>
                <span>500 km</span>
              </div>
              <div className="detail">
                <h3>Horse power</h3>
                <span>500 km</span>
              </div>
            </div>
          </div>
          <hr />
          <div className="container">
            <h2>Car Details</h2>
            <div className="details">
              <div className="detail">
                <h3>Horse power</h3>
                <span>500 km</span>
              </div>
              <div className="detail">
                <h3>Horse power</h3>
                <span>500 km</span>
              </div>
              <div className="detail">
                <h3>Horse power</h3>
                <span>500 km</span>
              </div>
              <div className="detail">
                <h3>Horse power</h3>
                <span>500 km</span>
              </div>
              <div className="detail">
                <h3>Horse power</h3>
                <span>500 km</span>
              </div>
              <div className="detail">
                <h3>Horse power</h3>
                <span>500 km</span>
              </div>
            </div>
          </div>
          <hr />
          <div className="buttons">
            <div className="acceptButton">Accept</div>
            <div className="cancelButton">Cancel</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
