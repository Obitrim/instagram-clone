const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../../models/User.js");

module.exports = async (req, res) => {
	let { email, password } = req.body;
	let errorObj = {
		user: null,
		token: null
	}
	if(!email || !password){
		res.status(422).json({
			...errorObj, 
			error: "Both Email and Password are required"
		});
		return;
	}
	
	try {
		let user = await userModel.findOne({ email });
		if(!user){
			throw new Error(`Invalid email or password`);
		}

		let passwordMatch = await bcrypt.compare(password, user.password);
		if(!passwordMatch){
			throw new Error("Invalid email or Password")
		}

		let token = jwt.sign({ _id: user._id }, process.env._TOKEN_SECRET);
		user.password = password;
		res.status(200).json({
			user,
			token,
			error: null
		});
	} catch(err){
		res.status(500).json({
			...errorObj,
			error: err.message
		})
	}
};