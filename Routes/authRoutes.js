var express = require ("express");
var router = express.Router();

var authController = require("../Controllers/authController");

router.post("/register", authController.registerNewUser );


module.exports = router;
