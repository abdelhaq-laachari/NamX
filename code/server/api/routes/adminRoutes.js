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
router.get("/getDetails",protect,getDetails);
router.post("/addDetails",protect,addDetails);
router.put("/updateDetail/:id",protect,updateDetail);
router.delete("/deleteDetail/:id",protect,deleteDetail)

module.exports = router;
