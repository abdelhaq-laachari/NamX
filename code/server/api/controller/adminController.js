const asyncHandler = require("express-async-handler");

// @desc    Sign in a new admin
// @route   POST /admin/signIn
// @access  Public

const signIn = asyncHandler(async (req, res) => {
  const {firstName, lastName} = req.body;
  if (!firstName || !lastName) {
    res.status(400);
    throw new Error("Please fill in all fields");
  }
  res.status(201).json(firstName);
});

module.exports = {
  signIn,
};
