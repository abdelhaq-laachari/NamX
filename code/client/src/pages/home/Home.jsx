import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import { useEffect, useState } from "react";
import axios from "axios";
import { config } from "../../getToken";

const Home = () => {
  const [car, setCar] = useState();
  const [order, setOrder] = useState();
  const [client, setClient] = useState();

  useEffect(() => {
    const totalCar = async () => {
      const res = await axios.get("admin/totalCars", config);
      setCar(res.data);
    };

    const totalOrder = async () => {
      const res = await axios.get("admin/totalOrders", config);
      setOrder(res.data);
    };

    const totalClient = async () => {
      const res = await axios.get("admin/totalClients", config);
      setClient(res.data);
    };

    totalCar();
    totalOrder();
    totalClient();
  }, []);

  console.log(car);

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" amount={client} />
          <Widget type="order" amount={order} />
          <Widget type="cars" amount={car} />
          <Widget type="balance" amount="100" />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
