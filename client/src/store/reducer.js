export default (state, action) => {
	switch(action.type){
		case "SET_USER":
			localStorage.setItem("user", JSON.stringify(action.user));
			return {
				...state,
				user: action.user
			}
		case "GET_USER":
			return {
				user: JSON.parse(localStorage.getItem("user"))
			}
		case "SET_TOKEN":
			localStorage.setItem("token", action.token);
			return {
				...state,
				token: action.token
			}
		default: 
			return new Error("Requested Action was not defined");
	}
}