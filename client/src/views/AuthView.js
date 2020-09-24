import React from 'react';
import "../styles/Auth.css";
import { Redirect } from "react-router-dom";
import { StoreContext } from "../store/index";
import AuthLogin from "../components/auth/AuthLogin";
import AuthRegister from "../components/auth/AuthRegister";

export default class AuthView extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			authScreen: "login"
		}
	}

	switchAuthScreen = (evt, screen) => {
		evt.preventDefault();
		this.setState({
			authScreen: screen 
		});
	}

	componentDidMount() {
		let token = localStorage.getItem("token");
		this.context.dispatch({ type: "SET_TOKEN", token})
	}

	render() {
		const currentScreen = this.state.authScreen;
		if(this.context.store.token){
			return <Redirect to="/app" />
		}
		return (
			<div className="AuthView">
				<header className="AuthView__Header">
					<img className="AuthView__Header__Logo" src="/imgs/logo.png" alt="instagram-logo" />
				</header>
				<main className={`AuthView__Main ${currentScreen === 'register' && 'AuthView__Main--ShiftLeft'}`}>
					<AuthLogin switchScreen={this.switchAuthScreen} />
					<AuthRegister switchScreen={this.switchAuthScreen} />
				</main>
				<footer className="AuthView__Footer"></footer>
			</div>
		);
	}
}

AuthView.contextType = StoreContext;