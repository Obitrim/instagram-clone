import React from 'react';
import "../styles/FollowingBox.css";
import { Link } from "react-router-dom";

const FollowingBox = (props) => {
  return (
    <div className="FollowingBox">
    	<Link to="/" className="FollowingBox__Account">
    		<img src="/imgs/profile.jpg" className="FollowingBox__Account__Img" alt="account-profile" />
    		<span className="FollowingBox__Account__Name">Username</span>
    	</Link>
		<Link to="/" className="FollowingBox__Account">
    		<img src="/logo192.png" className="FollowingBox__Account__Img" alt="account-profile" />
    		<span className="FollowingBox__Account__Name">Username</span>
    	</Link>
    	<Link to="/" className="FollowingBox__Account">
    		<img src="/imgs/profile_2.jpg" className="FollowingBox__Account__Img" alt="account-profile" />
    		<span className="FollowingBox__Account__Name">Username</span>
    	</Link>
    	<Link to="/" className="FollowingBox__Account">
    		<img src="/imgs/profile_3.jpg" className="FollowingBox__Account__Img" alt="account-profile" />
    		<span className="FollowingBox__Account__Name">Username</span>
    	</Link>
		<Link to="/" className="FollowingBox__Account">
    		<img src="/imgs/profile_4.jpg" className="FollowingBox__Account__Img" alt="account-profile" />
    		<span className="FollowingBox__Account__Name">Username</span>
    	</Link>
    	<Link to="/" className="FollowingBox__Account">
    		<img src="/imgs/post.jpg" className="FollowingBox__Account__Img" alt="account-profile" />
    		<span className="FollowingBox__Account__Name">Username</span>
    	</Link>
    </div>
  )
}

export default FollowingBox;