const Post = require("../../models/post.js");

module.exports = async (req, res) => {
	try {
		const posts = await Post.find({}).populate("postedBy", "_id name");
		res.status(200).json(posts);
	} catch(err){
		console.log(err);
		res.status(500).json({
			error: err.message
		});
	}
};