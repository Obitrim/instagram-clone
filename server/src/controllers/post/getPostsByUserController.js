const Post = require("../../models/post.js");

module.exports = (req, res) => {
	Post
		.find({ postedBy: req.user._id })
		.populate("postedBy", "_id name")
		.then(posts => {
			res.status(200).json(posts);
		})
		.catch(err => {
			res.status(500).json({ error: err.message })
		})
};