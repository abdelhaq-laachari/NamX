const asyncHandler = require("express-async-handler");
const Order = require("../models/orderModel");
const Client = require("../models/clientModel");
const { confirmationMail, cancelationMail, pendingMail } = require("emailsender-js");
const authEmail = process.env.EMAIL;
const authPassword = process.env.PASS;

// @desc    Create new order by client
// @route   POST /newOrder
// @access  Public
const newOrder = asyncHandler(async (req, res) => {
  const {
    fullName,
    address,
    city,
    zipCode,
    country,
    phoneNumber,
    email,
    quantity,
    idCar,
  } = req.body;

  const firstName = fullName.split(" ")[0];

  if (
    !fullName ||
    !address ||
    !city ||
    !zipCode ||
    !country ||
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
    zipCode,
    country,
    phoneNumber,
    email,
  });
  if (client) {
    const order = await Order.create({
      quantity,
      status: "Pending",
      idClient: client._id,
      idCar,
    });
    if (order) {
      pendingMail({
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
  const orders = await Order.find({})
    .populate("idClient", "fullName")
    .populate("idCar");
  res.status(200).json(orders);
});

// @desc    Accept order
// @route   POST /acceptOrder
// @access  Private
const acceptOrder = asyncHandler(async (req, res) => {
  // update order status
  const orderId = req.params.id;
  const order = await Order.findById(orderId);

  if (!order) {
    res.status(400);
    throw new Error("Car not found");
  }

  const updatedOrder = await Order.findByIdAndUpdate(orderId, req.body, {
    new: true,
  });

  if (updatedOrder) {
    // update client status
    const clientId = updatedOrder.idClient;
    const client = await Client.findById(clientId);
    if (client) {
      confirmationMail({
        email: client.email,
        subject: "Your order is on its way!",
        fullName: client.fullName,
        authEmail,
        authPassword,
      });
      res.send({ message: " The order has been confirmed " });
    }
  }
});

// @desc    Cancel order
// @route   POST /cancelOrder
// @access  Private
const cancelOrder = asyncHandler(async (req, res) => {
  // update order status
  const orderId = req.params.id;
  const order = await Order.findById(orderId);

  if (!order) {
    res.status(400);
    throw new Error("Car not found");
  }

  const updatedOrder = await Order.findByIdAndUpdate(orderId, req.body, {
    new: true,
  });

  if (updatedOrder) {
    // update client status
    const clientId = updatedOrder.idClient;
    const client = await Client.findById(clientId);
    if (client) {
      cancelationMail({
        email: client.email,
        subject: "Cancellation Requested.",
        fullName: client.fullName,
        authEmail,
        authPassword,
      });
      res.send({ message: " The order has been canceled " });
    }
  }
});

// @desc    Get single order
// @route   DELETE /singleOrder/:id
// @access  Private
const singleOrder = asyncHandler(async (req, res) => {
  const orderId = req.params.id;

  const order = await Order.findById(orderId)
    .populate("idClient")
    .populate("idCar");

  if (!order) {
    res.status(400);
    throw new Error("Order not found");
  }

  res.send(order);
});

// @desc    Get total orders
// @route   GET /totalOrders
// @access  Private

const totalOrders = asyncHandler(async (req, res) => {
  const total = await Order.countDocuments();
  res.status(200).json(total);
});

module.exports = {
  getOrders,
  acceptOrder,
  cancelOrder,
  singleOrder,
  newOrder,
  totalOrders,
};
