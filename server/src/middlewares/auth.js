const jwt = require("jsonwebtoken");
const UserModel = require("../models/User.js");

module.exports = async (req, res, next) => {
	const { authorization } = req.headers;

	if(!authorization){
		return res.status(401).json({ 
			error: "You are not logged in" 
		});
	}

	let verifiedPayload;
	try {
		const token = authorization.replace("Bearer ", "");
		verifiedPayload = await jwt.verify(token, process.env._TOKEN_SECRET);
	} catch(err){
		return res.status(401).json({ 
			error: "You are not logged in" 
		});
	}

	try {
		const user = await UserModel.findById(verifiedPayload._id);
		req.user = user;
		next();
	} catch(err){
		res.status(500).json({ error: err.message });
	}
}