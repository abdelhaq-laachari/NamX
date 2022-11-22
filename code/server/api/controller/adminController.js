const asyncHandler = require("express-async-handler");
const Admin = require("../models/adminModel");

// @desc    Update admin information
// @route   PUT /admin/update/:id
// @access  Private

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
