const router = require("express").Router();
const auth = require("../middlewares/auth.js");
const controllers = require("../controllers/index.js");
/**
 *
 * Get all posts route
 */
router.get("/", controllers['get-all-posts']);
/**
 *
 * Get all posts created by user route
 */
router.get("/u", auth, controllers['get-all-posts-by-user']);
/**
 *
 * Create post route
 */
router.post("/create", auth, controllers['create-post']);

module.exports = router;