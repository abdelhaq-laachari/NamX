const express = require("express");
const router = express.Router();
const { updateAdmin, getAdmin } = require("../controller/adminController");
const { getCars, addCars, updateCar, deleteCar } = require("../controller/carController");


router.route("/update/:id").put(updateAdmin);

router.route("/getAdmin/:id").get(getAdmin);

// add route for car crud
router.route("/getCars").get(getCars);
router.route("/addCars").post(addCars);
router.route("/updateCar/:id").put(updateCar);
router.route("/deleteCar/:id").delete(deleteCar);

module.exports = router;
