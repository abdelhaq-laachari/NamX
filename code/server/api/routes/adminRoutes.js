const express = require("express");
const router = express.Router();
const { getAdmin } = require("../controller/adminController")


router.route("/getAdmin/:id").get(getAdmin);





module.exports = router;
