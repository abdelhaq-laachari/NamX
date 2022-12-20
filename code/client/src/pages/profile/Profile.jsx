import React, { useEffect, useState } from "react";
import Single from "../../components/single/Single";
import axios from "axios";
import { config } from "../../getToken";

const Profile = () => {
  const [data, setData] = useState();
  //   const data = [];
  const token = localStorage.getItem("accessToken");

  // get admin data using axios
  useEffect(() => {
    const getAdmin = async () => {
      const res = await axios.get("/admin/getAdmin", config);
      //   data.push(res.data); 
      setData(res.data);
      console.log(data);
    };
    getAdmin();
  }, []);
  return (
    <>
      <Single data={data} />
    </>
  );
};

export default Profile;
