const express = require("express");
const router = express.Router();

// get function from admin controller
const {
  updateAdmin,
  getAdmin,
  registerAdmin,
  authAdmin,
} = require("../controller/adminController");

// get function from car controller
const {
  getCars,
  addCars,
  updateCar,
  deleteCar,
} = require("../controller/carController");

// get function from client controller
const { createClient, singleClient, getClients } = require("../controller/clientController");

// get function from details controller
const {
  getDetails,
  addDetails,
  updateDetail,
  deleteDetail,
} = require("../controller/detailsController");

// get function from order controller
const { newOrder, getOrders } = require("../controller/orderController");


//  Protect all routes
const { protect } = require("../middleware/authMiddleware");

// admin routes
router.route("/login").post(authAdmin);
router.route("/registerAdmin").post(registerAdmin);
router.route("/update/:id").put(protect, updateAdmin);
router.route("/getAdmin").get(protect, getAdmin);

// add route for car crud

router.route("/getCars").get(protect, getCars);
router.route("/addCars").post(protect, addCars);
router.route("/updateCar/:id").put(protect, updateCar);
router.route("/deleteCar/:id").delete(protect, deleteCar);

// Create route for details crud
router.route("/getDetails").get(protect, getDetails);
router.route("/addDetails").post(protect, addDetails);
router.route("/updateDetail/:id").put(protect, updateDetail); 
router.route("/deleteDetail/:id").delete(protect, deleteDetail);


// Create route for orders
router.route("/getOrders").get(protect, getOrders);

// Create route for client
router.route("/singleClient/:id").get(singleClient);
router.route("/getClients").get(protect, getClients);

// export route file
module.exports = router;
