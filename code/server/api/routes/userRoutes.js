const express = require("express"); // Import express
const { getCars } = require("../controller/carController");
const { newOrder } = require("../controller/orderController");
const router = express.Router(); // Create a router


// make order routes
router.route("/newOrder").post(newOrder);

// create car routes
router.route("/getCars").get(getCars);

module.exports = router;
