const asyncHandler = require("express-async-handler");
const Details = require("../models/detailsModel");

// @desc    Get all Details
// @route   GET admin/details
// @access  Private
const getDetails = asyncHandler(async (req, res) => {
  const details = await Details.find();
  res.status(200).json(details);
});

// @desc    Add a new details
// @route   POST admin/details
// @access  Private
const addDetails = asyncHandler(async (req, res) => {
  const { details } = req.body;
  if (!details) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  const detail = await Details.create({
    details,
  });

  res.status(200).json(detail);
});

// @desc    Update a detail
// @route   PUT admin/detail/:id
// @access  Private
const updateDetail = asyncHandler(async (req, res) => {
  const detailId = req.params.id;
  const detail = await Details.findById(detailId);

  if (!detail) {
    res.status(400);
    throw new Error("Detail not found");
  }
  const updatedDetail = await Details.findByIdAndUpdate(detailId, req.body, {
    new: true,
  });

  res.status(200).json(updatedDetail);
});

// @desc    Delete a detail
// @route   DELETE admin/detail/:id
// @access  Private
const deleteDetail = asyncHandler(async (req, res) => {
  const detailId = req.params.id;
  const detail = await Details.findById(detailId);

  if (!detail) {
    res.status(400);
    throw new Error("Car not found");
  }

  await detail.remove();

  res.status(200).json({ message: `Detail has been deleted successfully` });
});

module.exports = {
  getDetails,
  addDetails,
  updateDetail,
  deleteDetail,
};
