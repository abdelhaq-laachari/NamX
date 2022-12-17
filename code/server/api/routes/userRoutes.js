const express = require("express"); // Import express
const { newOrder } = require("../controller/orderController");
const router = express.Router(); // Create a router


// make order routes
router.route("/newOrder").post(newOrder);

module.exports = router;
