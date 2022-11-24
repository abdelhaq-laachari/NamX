const express = require("express");
const router = express.Router();
const { 
    updateAdmin,
    getAdmin,
    authAdmin,
    registerAdmin,
 } = require("../controller/adminController");
// /api/admin/login
router.route("/login").post(authAdmin);

router.route("/registerAdmin").post(registerAdmin);

router.route("/update/:id").put(updateAdmin);

router.route("/getAdmin/:id").get(getAdmin);

module.exports = router;
