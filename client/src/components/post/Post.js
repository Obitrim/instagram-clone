import React from 'react';
import CommentBox from "./CommentBox";
import PostHeader from "./PostHeader";
import PostContent from "./PostContent";
import "../../styles/post/Post.css";

const Post = (props) => {
  return (
    <div className="Post">
    	<PostHeader/>
	    <PostContent/>
	    <CommentBox/>
    </div>
  )
}

export default Post;