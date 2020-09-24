import axios from "./axios";

export default {
	loginUser: credentials => {
		return new Promise((resolve, reject) => {
			if(!credentials || !credentials.email || !credentials.password){
				reject(new Error("credentials required"));
				return;
			}

			axios.post("/auth/login", credentials)
				.then(res => resolve(res.data))
				.catch(error => {
					if(error.response.status === 500){
						resolve(error.response.data);
					}
					console.error(error);
				})
		});
	},

	registerUser: credentials => {
		return new Promise((resolve, reject) => {
			if(!credentials || 
				!credentials.email || 
				!credentials.username || 
				!credentials.password){
				return reject(new Error("Credentials with email, password and username is required"));
			}

			let { username: name, email, password } = credentials;
			axios.post("/auth/register", {name, email, password})
				.then(res => resolve(res.data))
				.catch(error => {
					if(error.response.status === 500){
						resolve(error.response.data);
					}
					console.error(error);
				})
		})
	}
}