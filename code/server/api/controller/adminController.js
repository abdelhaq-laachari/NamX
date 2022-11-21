const asyncHandler = require("express-async-handler");
const Admin = require("../models/adminModel");

// @desc    Sign in a new admin
// @route   POST /admin/signIn
// @access  Public

const signIn = asyncHandler(async (req, res) => {

});

module.exports = {
  signIn,
};
