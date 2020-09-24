class CustomError extends Error {
	constructor(name, message=""){
		super(message);
		if(Error.captureStackTrace){
			Error.captureStackTrace(this, CustomError);
		}
		this.name = this.errorNameToCamelCase();
	}

	errorNameToCamelCase(){
		return this.name.split(" ").map(word => word.charAt(0) + word.slice(1));
	}
}