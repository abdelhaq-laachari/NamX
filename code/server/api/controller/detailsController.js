const asyncHandler = require("express-async-handler");
const Details = require("../models/detailsModel");

// @desc    Get all Details
// @route   GET /api/details
// @access  Private
const getDetails = asyncHandler(async (req, res) => {
  const details = await Details.find();
  res.status(200).json(details);
});


module.exports = {
  getDetails,
};
