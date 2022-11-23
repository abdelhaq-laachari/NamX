const express = require("express");
const router = express.Router();
const { getAdmin, register } = require("../controller/adminController")


// post admin 
router.route('/register').post(register);
router.route("/getAdmin/:id").get(getAdmin);





module.exports = router;
