import React from 'react';
import "../styles/Suggestion.css";
import { Link } from "react-router-dom";

const Suggestion = ({ account }) => {
  return (
    <Link to="/" className="Suggestion">
    	<img src={account.img} alt="account-profile-image" className="Suggestion__AccountImg" />
    	<div className="AccountDetails">
    		<span className="AccountDetails__Name">{account.name}</span>
    		<small className="AccountDetails__Tag">Popular</small>
    	</div>
    	<button type="button" className="Suggestion__Follow">Follow</button>
    </Link>
  )
}

export default Suggestion;