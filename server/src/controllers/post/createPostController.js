const Post = require("../../models/post.js");

module.exports = async (req, res) => {
	let { body, image } = req.body;

	if(!image){
		return res.status(422).json({ error: "post has no image or body" });
	}

	try {
		const post = await new Post({
			image,
			body: body || "",
			postedBy: req.user
		}).save();

		let postDoc = post._doc;
		postDoc.postedBy.password = undefined;
		res.status(201).json(postDoc);
	} catch(err){
		res.status(500).json({
			error: err.message
		})
	}
}