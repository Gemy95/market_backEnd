var express = require ("express");
var router = express.Router();

var authController = require("../Controllers/authController");


/**
 * @typedef UserObj
 * @property {string} name.required
 * @property {integer} age.required
 * @property {string} email.required
 * @property {string} phoneNumber.required
 * @property {string} password.required
 * @property {string} address.required
 * 
 */

 /**
 * @group market project
 * @route POST /API/register
 * @param {UserObj.model} body.body.required 
 * @returns {object} 200 - token
 * @returns {Error}  default - Unexpected err
 */
router.post("/register", authController.registerNewUser );


module.exports = router;
