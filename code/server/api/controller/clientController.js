const asyncHandler = require("express-async-handler");
const Client = require("../models/clientModel");

const createClient = asyncHandler(async (req, res) => {
  const { fullName, address, city, phoneNumber, email } = req;

  if (!fullName || !address || !city || !phoneNumber || !email) {
    res.status(400);
    throw new Error("Please fill in all fields");
  }

  const user = await Client.create({
    fullName,
    address,
    city,
    phoneNumber,
    email,
  });
});

module.exports = {
  createClient,
};
