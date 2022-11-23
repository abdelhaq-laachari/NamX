const express = require("express");
const router = express.Router();
const { updateAdmin, getAdmin } = require("../controller/adminController");
const { getCars, addCars, updateCar, deleteCar } = require("../controller/carController");
const { getDetails, addDetails } = require("../controller/detailsController");


router.route("/update/:id").put(updateAdmin);

router.route("/getAdmin/:id").get(getAdmin);

// add route for car crud
router.route("/getCars").get(getCars);
router.route("/addCars").post(addCars);
router.route("/updateCar/:id").put(updateCar);
router.route("/deleteCar/:id").delete(deleteCar);

// Create route for details crud
router.route("/getDetails").get(getDetails)
router.route("/addDetails").post(addDetails)

module.exports = router;
