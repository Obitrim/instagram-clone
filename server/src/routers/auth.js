const router = require("express").Router();
const controllers = require("../controllers/index.js");
/**
 *
 * Register route
 */
router.post("/register", controllers["register"]);
/**
 *
 * Login route
 */
router.post("/login", controllers["login"]);

module.exports = router;