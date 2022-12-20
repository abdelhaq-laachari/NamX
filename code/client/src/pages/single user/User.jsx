import React, { useEffect, useState } from "react";
import axios from "axios";
import Single from "../../components/single/Single";
import { config } from "../../getToken";

const User = () => {
  const [data, setData] = useState();
  const token = localStorage.getItem("accessToken");
  useEffect(() => {
    const id = localStorage.getItem("userId");
    const getUser = async (id) => {
      const res = await axios.get("/admin/singleClient/" + id, config);
      //   data.push(res.data);
      setData(res.data);
      console.log(data);
    };
    getUser(id);
  }, []);

  return (
    <>
      <Single data={data} />
    </>
  );
};

export default User;
