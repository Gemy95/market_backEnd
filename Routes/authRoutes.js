var express = require ("express");
var router = express.Router();

var authController = require("../Controllers/authController");


/**
 * @group market project
 * @route GET /API/
 * @returns {text/html} 200 
 * @returns {Error}  default - Unexpected err
 */


/**
 * @typedef UserObj
 * @property {string} fullName.required
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


/**
 * @typedef loginObj
 * @property {string} email.required
 * @property {string} password.required
 * 
 */

 /**
 * @group market project
 * @route POST /API/login
 * @param {loginObj.model} body.body.required 
 * @returns {object} 200 - token
 * @returns {Error}  default - Unexpected err
 */
router.post("/login", authController.loginUser );



/**
 * @group market project
 * @route GET /API/userInfo
 * @param {string} userId.query.required 
 * @returns {object} 200 
 * @returns {Error}  default - Unexpected err
 */
router.get("/userInfo", authController.userInfo );


module.exports = router;
