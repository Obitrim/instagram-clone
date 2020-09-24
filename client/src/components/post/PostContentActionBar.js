import React from 'react';
import "../../styles/post/PostContentActionBar.css";
import SendIcon from "@material-ui/icons/SendOutlined";
import BookmarkFillIcon from "@material-ui/icons/BookmarkOutlined";
import FavoriteIcon from "@material-ui/icons/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@material-ui/icons/FavoriteOutlined";
import InsertCommentIcon from "@material-ui/icons/InsertCommentOutlined";
import BookmarkOutlineIcon from "@material-ui/icons/BookmarkBorderOutlined";

const PostContentActionBar = (props) => {
  return (
    <div className="ActionBar">
    	<FavoriteIcon className="ActionBar__Icon"/>
    	<InsertCommentIcon className="ActionBar__Icon"/>
    	<SendIcon className="ActionBar__Icon"/>
    	<BookmarkOutlineIcon className="ActionBar__Icon ActionBar__Icon--shift-right"/>
    </div>
  )
}

export default PostContentActionBar;