import React from 'react';
import "../../styles/post/CommentBox.css";

const CommentBox = () => {
	return (
		<form action="#" className="CommentBox">
	    	<input className="CommentBox__Input" type="text" name="comment" placeholder="Add a comment"/>
	    	<button className="CommentBox__PostBtn" type="submit">Post</button>
	    </form>
	);
}

export default CommentBox;
