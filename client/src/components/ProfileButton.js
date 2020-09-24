import React from 'react';
import "../styles/ProfileButton.css";
import { Link } from "react-router-dom";
import { StoreContext } from "../store/index";
import Settings from "@material-ui/icons/Settings";
import ExitToApp from "@material-ui/icons/ExitToApp";
import AccountCircle from '@material-ui/icons/AccountCircle';
import BookmarkBorder from '@material-ui/icons/BookmarkBorder';

export default class ProfileBox extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			isOpen: false
		}
	}
	/*
	|--------------------------------------------------------------------
	| Event Handlers
	|--------------------------------------------------------------------
	*/
	ProfileBoxToggleHandler = evt => {
		evt.preventDefault();
		evt.stopPropagation();
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	closeOptionsHandler = evt => {
		const targetElement = evt.target;
		if(!targetElement.matches(".show")){
			this.setState({
				isOpen: false
			});
		}

	}

	logout = () => {
		this.context.dispatch({ type: "SET_USER", user: null });
		this.context.dispatch({ type: "SET_TOKEN", token: "" });
		localStorage.setItem("token", "");
		localStorage.setItem("user", null);

	}

	/*-------------------------Lifecycle methods----------------------*/

	componentDidMount() {
		document.documentElement.addEventListener("click", this.closeOptionsHandler);
	}

	componentWillUnmount(){
		document.documentElement.removeEventListener("click", this.closeOptionsHandler);
	}

	/*-----------------------------Render-------------------------------*/
	
	render() {
		return (
			<div className="ProfileBox">
				<a href="#" className="Toggler" onClick={ this.ProfileBoxToggleHandler }>
		    		<img  className="Toggler__Img" src="/imgs/profile.jpg" alt="Profile__img"/>
		    	</a>
		    	<div className={`Options ${this.state.isOpen && 'show'}`}>
	    			<Link to="/" className="Options__Option">
	    				<AccountCircle />
	    				<span className="Options__Option__text">Profile</span>
	    			</Link>
	    			<Link to="/" className="Options__Option">
	    				<BookmarkBorder />
	    				<span className="Options__Option__text">Saved</span>
	    			</Link>
	    			<Link to="/" className="Options__Option">
	    				<Settings />
	    				<span className="Options__Option__text">Settings</span>
	    			</Link>
	    			<hr className="Options__Divider"/>
	    			<button className="Options__Option Options__Option--Logout" onClick={this.logout}>
	    				<ExitToApp />
	    				<span className="Options__Option__text">Logout</span>
	    			</button>
	    		</div>
			</div>
		);
	}
}

ProfileBox.contextType = StoreContext;