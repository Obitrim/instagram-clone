import React from 'react';
import { Link } from "react-router-dom";

import Navbar from "./Navbar";
import "../styles/AppHeader.css";
import AppContainer from "./AppContainer";
import Search from "@material-ui/icons/Search";

const AppHeader = ({ logoutUser }) => {
	return (
		<header className="AppHeader">
			<AppContainer>
				<div className="AppHeader__Content">
			    	<Link to="/">
			    		<img alt="Instagram" 
				    		className="header__logo" 
				    		src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
				    		/>
			    	</Link>
			    	<div className="SearchBox">
			    		<input type="search" 
			    			className="SearchBox__Input" 
			    			name="key" 
			    			placeholder="Search"
			    			required
			    			/>
			    		<Search size="small" className="SearchBox__Icon"/>
			    	</div>
			    	<Navbar/>
				</div>
			</AppContainer>
		</header>
	)
}

export default AppHeader;