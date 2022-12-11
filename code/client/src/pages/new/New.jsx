
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import  { useEffect, useState } from "react";
import axios from "axios";


const NewCar = ({ inputs, title }) => {
  const [data, setData] = useState();
  const [file, setFile] = useState("");
  //   const data = [];
  const token = localStorage.getItem("accessToken");

  // get admin data using axios
  useEffect(() => {
    const getAdmin = async () => {
      const res = await axios.get("/admin/getAdmin", {
        headers: { Authorization: "Bearer " + token },
      });
      //   data.push(res.data); 
      setData(res.data);
    };
    getAdmin();
    console.log(data);
  }, []);

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}
              <button>Send</button>
            </form>
          </div>
        </div>
      </div> 
    </div>
  );
};

export default NewCar;
