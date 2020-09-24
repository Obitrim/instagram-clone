const mongoose = require("mongoose");
const { ObjectId }  = mongoose.Schema.Types;

const postSchema = new mongoose.Schema({
	postedBy: {
		type: ObjectId,
		required: true,
		ref: "User"
	},
	body: {
		type: String,
		default: ""
	},
	image: {
		type: String,
		required: true
	},
	likes: {
		type: Array,
		default: []
	},
	comments: {
		type: Array,
		default: []
	}
});

module.exports = mongoose.model("Post", postSchema);