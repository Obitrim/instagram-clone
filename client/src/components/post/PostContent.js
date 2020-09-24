import React from 'react';
import "../../styles/post/PostContent.css";
import PostContentActionBar from "./PostContentActionBar";

const PostContent = (props) => {
  return (
    <div className="PostContent">
    	<img className="PostContent__Img" src="/imgs/post.jpg" alt="post-img"/>
    	{/*post actions*/}
    	<PostContentActionBar/>
    	{/*liked by*/}
    	<p className="PostContent__Text">Liked by <strong>Paul and others</strong></p>
    	{/*post body if any*/}
    	<p className="PostContent__Text">
    		Material Design has SVG icon, we export the respective React component from the @material-ui/icons package. 
    	</p>
    	{/*comments*/}
    </div>
  )
}

export default PostContent;