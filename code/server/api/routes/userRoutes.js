const express = require("express"); // Import express
const { newOrder } = require("../controller/orderController");
const router = express.Router(); // Create a router

// get function from car controller 
const { getCars} = require("../controller/carController");

// make order routes
router.route("/newOrder").post(newOrder);

// create car routes
router.route("/getCars").get(getCars); 

module.exports = router;
