import "./orders.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatable from "../../components/datatable/Datatable";
import { useEffect, useState } from "react";
import axios from "axios";
import { config } from "../../getToken";

const Cars = () => {
  
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("admin/getOrders", config)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  }, []);

  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable data={data} title="All Orders" />
      </div>
    </div>
  );
};

export default Cars;
