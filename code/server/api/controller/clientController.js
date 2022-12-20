const asyncHandler = require("express-async-handler");
const Client = require("../models/clientModel");

// @desc    Create a new client
// @route   POST /api/client
// @access  Public
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

// @desc    Get a single client
// @route   GET /admin/singleClient/:id
// @access  Private
const singleClient = asyncHandler(async (req, res) => {
  const client = await Client.findById(req.params.id)
  res.send(client);
});

// @desc    Get all clients
// @route   GET /admin/clients
// @access  Private

const getClients = asyncHandler(async (req, res) => {
  const clients = await Client.find();
  res.send(clients);
});

// @desc    Get total clients
// @route   GET /admin/totalClients
// @access  Private

const totalClients = asyncHandler(async (req, res) => {
  const total = await Client.countDocuments();
  res.status(200).json(total);
});

module.exports = {
  createClient,
  singleClient,
  getClients,
  totalClients
};
