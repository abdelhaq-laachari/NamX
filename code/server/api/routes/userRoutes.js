const express = require("express"); // Import express
const router = express.Router(); // Create a router

// get function from car controller 
const { getCars} = require("../controller/carController");

// add route for car crud
router.route("/getCars").get(getCars);
module.exports = router;
