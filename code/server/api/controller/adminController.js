const asyncHandler = require("express-async-handler");
const Admin = require("../models/adminModel");

// @desc    Get admin information
// @route   GET /admin/getAdmin
// @access  Public

const getAdmin = asyncHandler(async (req, res) =>
{
  const admin = await Admin.findById(req.params.id)
  res.status(200).json(admin);

});

module.exports = {
  getAdmin
};
