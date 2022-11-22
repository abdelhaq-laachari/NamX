const express = require("express");
const router = express.Router();
const { signIn, updateAdmin } = require("../controller/adminController");

router.route("/signIn").post(signIn);
router.route("/update/:id").put(updateAdmin);

module.exports = router;
