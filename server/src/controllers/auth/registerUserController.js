const bcrypt = require("bcrypt");
const userModel = require("../../models/User.js");
const { generateFromString } = require("generate-avatar");

module.exports = async (req, res) => {
	let { name, email, password } = req.body;
	let errorObj = { user: null, success: false };

	if(!name || !email || !password){
		res.status(422).json({
			...errorObj,
			error: "name, email and password fields are required"
		})
		return;
	}

	try {
		let userExists = await userModel.findOne({ email });
		if(!!userExists){
			res.status(406).json({
				...errorObj,
				error: `account with email ${email} already exists`
			})
			return;
		}

		let hashedPassword = await bcrypt.hash(password, 10);
		let generatedvatar = await generateFromString(email);
		let registeredUser = await new userModel({ 
			name, 
			email, 
			password: hashedPassword,
			photoUrl: `data:image/svg+xml;utf-8,${generatedvatar}`
		}).save();
		registeredUser.password = undefined;
		res.status(201).json(registeredUser);
	}catch(err){
		res.status(500).json({
			user: null,
			success: false,
			error: err.message
		});
	}
};