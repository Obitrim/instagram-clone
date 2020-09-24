import "../styles/UserProfileBox.css";
import {Link} from 'react-router-dom';
import React, { useContext} from 'react';
import { StoreContext } from '../store/index';

const UserProfileBox = (props) => {
	const { store } = useContext(StoreContext);
	const loggedInUser = store.user;

	function getFormattedAccountName(){
		return !!loggedInUser 
				? `${loggedInUser.name}_${loggedInUser._id.slice(0, 4)}`
				: "";
	}

	return (
		<div className="UserProfileBox">
			<img src={loggedInUser?.photoUrl} alt="profile-image" className="UserProfileBox__Img" />
			<Link to="/profile" className="Account">
				<p className="Account__Id">{getFormattedAccountName()}</p>
				<p className="Account__Name">{loggedInUser?.email}</p>
			</Link>
		</div>
	)
}

export default UserProfileBox;