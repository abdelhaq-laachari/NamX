const asyncHandler = require("express-async-handler");
const Admin = require("../models/adminModel");

// @desc    Sign in a new admin
// @route   POST /admin/signIn
// @access  Public

const signIn = asyncHandler(async (req, res) => {});

const updateAdmin = asyncHandler(async (req, res) => {
  const adminId = req.params.id;
  const admin = await Admin.findById(adminId);
  if (!admin) {
    res.status(404);
    throw new Error("Admin not found");
  }
  const updateProfile = await Admin.findByIdAndUpdate(req.admin.id, req.body, {
    new: true,
  });
  res.status(200).json(updateProfile);
});

module.exports = {
  signIn,
  updateAdmin,
};
