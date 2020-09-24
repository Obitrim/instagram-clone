import React from 'react';
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import Home from "@material-ui/icons/Home";
import ProfileBoxToggler from "./ProfileButton";
import AddBox from "@material-ui/icons/AddBox";
import ExploreOutlined from "@material-ui/icons/ExploreOutlined";
import FavoriteBorderOutlined from "@material-ui/icons/FavoriteBorderOutlined";
/**
 *
 * Component's Template
 *
 */
const Navbar = () => {
  return (
    <nav className="Navbar">
    	<Link to="/app" className="NavLink">
    		<Home style={{ color: "var(--textColor)"}} className="NavLink__Icon"/>
    	</Link>
    	<Link to="/app/explore" className="NavLink">
    		<ExploreOutlined style={{ color: "var(--textColor)"}} className="NavLink__Icon"/>
    	</Link>
        <Link to="/app/create" className="NavLink">
            <AddBox style={{ color: "var(--textColor)"}} className="NavLink__Icon"/>
        </Link>
    	<Link to="favorites" className="NavLink">
    		<FavoriteBorderOutlined style={{ color: "var(--textColor)"}} className="Link__Icon"/>
    	</Link>
    	<ProfileBoxToggler />
    </nav>
  )
}

export default Navbar;