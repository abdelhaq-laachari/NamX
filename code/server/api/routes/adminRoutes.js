const express = require("express");
const router = express.Router();
const {signIn} = require("../controller/adminController")



router.route("/signIn").post(signIn);



module.exports = router;
