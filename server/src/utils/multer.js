const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, path.resolve(__dirname, "/../../public/profile-uploads"))
	},
	filename: (req, file, cb) => {
		console.log(file);
		cb(null, );
	}
});

export const uploader = multer({ storage });