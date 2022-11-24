const express = require("express");
const router = express.Router();

const { updateAdmin, getAdmin, registerAdmin, authAdmin } = require("../controller/adminController");
const { getCars, addCars, updateCar, deleteCar } = require("../controller/carController");
const { getDetails, addDetails, updateDetail, deleteDetail } = require("../controller/detailsController");
//  ajouter protect
const { protect } = require("../middleware/authMiddleware");
// /api/admin/login
router.route("/login").post(authAdmin);


router.route("/registerAdmin").post(registerAdmin);
router.put("/update/:id",protect,updateAdmin)
router.get("/getAdmin/:id",protect,getAdmin)


// add route for car crud

router.get("/getCars",protect,getCars);
router.post("/addCars",protect,addCars);
router.put("/updateCar/:id",protect,updateCar);
router.delete("/deleteCar/:id",protect,deleteCar);

// Create route for details crud
router.route("/getDetails").get(getDetails)
router.route("/addDetails").post(addDetails)
router.route("/updateDetail/:id").put(updateDetail)
router.route("/deleteDetail/:id").delete(deleteDetail)

module.exports = router;
