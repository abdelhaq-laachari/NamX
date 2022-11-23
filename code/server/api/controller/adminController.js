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
// @desc    Register admin 
// @route   POST /admin/register
// @access  Public
const register = asyncHandler(async (req, res) =>
{
  const { firstName, lastName, email, password } = req.body
  if (!firstName || !lastName || !email || !password)
  {
    res.status(400)
    throw new Error('Please add All field ! ')
  }
  //  check if admin exist 
  const adminExists = await Admin.findOne({ email })
  if (adminExists)
  {
    res.status(400)
    throw new Error('Admin is alredy exist! ') 
  }
  const admin = await Admin.create({
    firstName,
    lastName,
    email,
    password
  })
  if (admin)
  {
    res.status(201).json({
      _id: admin.id,
      firstName: admin.firstName,
      lastName: admin.lastName,
      email: admin.email
    })
  } else
  {
    res.status(400)
    throw new Error('Invalide admin data') 
  }
});


module.exports = {
  
  register,
  getAdmin
};
