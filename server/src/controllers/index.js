module.exports = {
	login: require("./auth/loginUserController.js"),
	register: require("./auth/registerUserController.js"),
	"create-post": require("./post/createPostController.js"),
	"get-all-posts": require("./post/getAllPostsController.js"),
	"get-all-posts-by-user": require("./post/getPostsByUserController")
}