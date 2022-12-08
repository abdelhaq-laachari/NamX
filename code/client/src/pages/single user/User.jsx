import React, { useEffect, useState } from "react";
import axios from "axios";
import Single from "../../components/single/Single";

const User = () => {
    const [data, setData] = useState();
    const token = localStorage.getItem("accessToken");
    useEffect(() => {
      const id = "6387acbafb0512c386cd59a7"
        const getUser = async (id) => {
            const res = await axios.get("/admin/singleClient/" + id , {
                headers: { Authorization: "Bearer " + token },
            });
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
