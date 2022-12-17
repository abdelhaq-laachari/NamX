import React, { useState } from "react";
import Car from "../../assets/image/car.jpg";
import axios from "axios";
import { successMessage } from "../../alert";
import {useNavigate} from 'react-router-dom'

const Order = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    phoneNumber: "",
    country: "",
    zipCode: "",
    quantity: "",
    idCar: "",
  });

  const {
    fullName,
    email,
    address,
    city,
    phoneNumber,
    country,
    zipCode,
    quantity,
    idCar,
  } = formData;

  const navigate = useNavigate();

  // const token = localStorage.getItem("accessToken");

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const orderFunction = async (e) => {
    e.preventDefault();
    
    // const config = {
    //   headers: { Authorization: "Bearer " + token },
    // };
    try {
      const res = await axios.post("user/newOrder", formData);
      // go to success page
      navigate('/success')
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
        <div className="container max-w-screen-lg mx-auto">
          <div>
            <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                <div className=" md:flex hidden ">
                  <img
                    src={Car}
                    alt="car"
                    className="w-full object-cover rounded"
                  />
                </div>

                <form className="lg:col-span-2" onSubmit={orderFunction}>
                  <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                    <div className="md:col-span-5">
                      <label htmlFor="full_name">Car</label>
                      <input
                        type="text"
                        name="idCar"
                        id="idCar"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        onChange={(e) => onChange(e)}
                      />
                    </div>

                    <div className="md:col-span-5">
                      <label htmlFor="full_name">Full Name</label>
                      <input
                        type="text"
                        name="fullName"
                        id="fullName"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        onChange={(e) => onChange(e)}
                      />
                    </div>

                    <div className="md:col-span-5">
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder="email@domain.com"
                        onChange={(e) => onChange(e)}
                      />
                    </div>

                    <div className="md:col-span-3">
                      <label htmlFor="address">Address / Street</label>
                      <input
                        type="text"
                        name="address"
                        id="address"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder=""
                        onChange={(e) => onChange(e)}
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="city">City</label>
                      <input
                        type="text"
                        name="city"
                        id="city"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder=""
                        onChange={(e) => onChange(e)}
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="city">Phone number</label>
                      <input
                        type="number"
                        name="phoneNumber"
                        id="phoneNumber"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder=""
                        onChange={(e) => onChange(e)}
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="country">Country / region</label>
                      <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                        <input
                          name="country"
                          id="country"
                          className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                          placeholder="Country"
                          onChange={(e) => onChange(e)}
                        />
                      </div>
                    </div>

                    <div className="md:col-span-1">
                      <label htmlFor="zipcode">Zipcode</label>
                      <input
                        type="text"
                        name="zipCode"
                        id="zipCode"
                        className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder=""
                        onChange={(e) => onChange(e)}
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="soda">How many soda pops?</label>
                      <div className="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                        <input
                          name="quantity"
                          id="quantity"
                          className="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent"
                          placeholder="0"
                          onChange={(e) => onChange(e)}
                        />
                      </div>
                    </div>

                    <div className="md:col-span-5 text-right">
                      <div className="inline-flex items-end">
                        <button
                          type="submit"
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
