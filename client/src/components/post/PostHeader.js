import React from 'react';
import MoreHorizontalIcon from "@material-ui/icons/MoreHoriz";
import "../../styles/post/PostHeader.css";

const PostHeader = (props) => {
  return (
    <div className="PostHeader">
    	<img className="PostHeader__Profile" src="/imgs/profile.jpg" alt="my post img" />
    	<span className="PostHeader__AccountName">username</span>
    	<button type="button" className="Icon">
    		<MoreHorizontalIcon className="Icon__MoreIcon"/>
    	</button>
    </div>
  )
}

export default PostHeader;