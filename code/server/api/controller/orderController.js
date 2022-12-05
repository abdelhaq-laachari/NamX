const asyncHandler = require("express-async-handler");
const Order = require("../models/orderModel");
const Client = require("../models/clientModel");
const { sendMail } = require("emailsender-js");
const authEmail = process.env.EMAIL;
const authPassword = process.env.PASS;

// @desc    Create new order by client
// @route   POST /newOrder
// @access  Public
const newOrder = asyncHandler(async (req, res) => {
  const { fullName, address, city, phoneNumber, email, quantity, idCar } =
    req.body;

  const firstName = fullName.split(" ")[0];

  if (
    !fullName ||
    !address ||
    !city ||
    !phoneNumber ||
    !email ||
    !quantity ||
    !idCar
  ) {
    res.status(400);
    throw new Error("Please fill in all fields");
  }

  const client = await Client.create({
    fullName,
    address,
    city,
    phoneNumber,
    email,
  });
  if (client) {
    const order = await Order.create({
      quantity,
      status: "pending",
      idClient: client._id,
      idCar,
    });
    if (order) {
      sendMail({
        email,
        subject: "Order Confirmation 2",
        fullName: firstName,
        authEmail,
        authPassword,
      });
      res.status(201).send({ message: "  your order was send to admin" });
    } else {
      throw new Error("something went wrong");
    }
  }
  if (!client) {
    throw new Error("something went wrong with client function");
  }
});

// @desc    Get all order
// @route   GET /orders
// @access  Private
const getOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find();
  res.status(200).json(orders);
});

// @desc    Accept order
// @route   POST /acceptOrder
// @access  Private
// still not working
const acceptOrder = asyncHandler(async (req, res) => {
  const model = req.body;
  if (!model) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  const car = await Order.create({
    model: req.body.model,
  });

  res.status(200).json(car);
});

// @desc    Cancel order
// @route   PUT /cancelOrder
// @access  Private
// still not working
const cancelOrder = asyncHandler(async (req, res) => {
  const car = await Order.findById(req.params.id);

  if (!car) {
    res.status(400);
    throw new Error("Car not found");
  }

  const updatedCar = await Order.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedCar);
});

// @desc    Get single order
// @route   DELETE /singleOrder/:id
// @access  Private
// still not working
const singleOrder = asyncHandler(async (req, res) => {
  const car = await Order.findById(req.params.id);

  if (!car) {
    res.status(400);
    throw new Error("Car not found");
  }

  await Order.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getOrders,
  acceptOrder,
  cancelOrder,
  singleOrder,
  newOrder,
};
