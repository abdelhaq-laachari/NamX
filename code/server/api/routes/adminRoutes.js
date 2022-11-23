const express = require("express");
const router = express.Router();
const { updateAdmin, getAdmin } = require("../controller/adminController");

router.route("/update/:id").put(updateAdmin);

router.route("/getAdmin/:id").get(getAdmin);

module.exports = router;
