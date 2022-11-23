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
  const { libelle, value, car } = req.body;
  if (!libelle || !value || !car) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  const details = await Details.create({
    libelle,
    value,
    car,
  });

  res.status(200).json(details);
});

module.exports = {
  getDetails,
  addDetails,
};
