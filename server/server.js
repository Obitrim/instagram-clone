require("dotenv").config();
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const cloudinary = require("cloudinary");
const authRouter = require("./src/routers/auth.js");
const postRouter = require("./src/routers/post.js");

const app = express();

/*--------------Mongoose setup------------*/
mongoose.connect(process.env._DB_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});
mongoose.connection.once("open", () => console.log("Connected to Db"));
mongoose.connection.on("error", err => console.log(err.message));

/*--------------cloudinary setup------------*/
cloudinary.config({
	api_key: process.env._cloudinary_api_key,
	api_secret: process.env._cloudinary_api_secret,
	cloud_name: process.env._cloudinary_cloud_name
})
/*
|----------------------------------------------
| Global MiddleWears
|----------------------------------------------
*/
app.use(cors());
app.use(express.json());
app.use(express.static("public"));
/*
|----------------------------------------------
| Routes
|----------------------------------------------
*/
app.use("/auth", authRouter);
app.use("/posts", postRouter);

app.listen(process.env.PORT || 8080, () => {
	console.log("Server started on port 8080");
});