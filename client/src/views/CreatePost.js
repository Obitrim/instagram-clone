import React, { useState } from 'react';

import "../styles/CreatePost.css";
import PostService from "../services/post";
import AppContainer from "../components/AppContainer";
import BaseButton from "../components/buttons/BaseButton";
import SingleImageUploader from "../components/forms/SingleImageUploader";

const CreatePost = (props) => {
	const [file, setFile] = useState(null);
	const [previewUrl, setPreviewUrl] = useState("");
	const [description, setDescription] = useState("");

	function onFileChangeHandler(file){
		setFile(file);
		let previewUrl = URL.createObjectURL(file);
		setPreviewUrl(previewUrl);
	}

	function onDescriptionChangeHandler(evt){
		setDescription(evt.target.value);
	}

	function createPost(){
		console.log(file, description);
		if(file === null){
			return console.error("file required");
		}

		let postData = new FormData();
		postData.append("image", file, 'post-img.png');
		postData.append("body", description);
		PostService.createPost(postData);
	}

	return (
		<div className="CreatePost">
			<AppContainer className="CreatePost__AppContainer">
		    	<SingleImageUploader 
		    		previewUrl={previewUrl} 
		    		onChange={onFileChangeHandler}
		    	/>
		    	<div className="FormGroup">
		    		<label htmlFor="description">Description</label>
		    		<textarea 
		    			className="PostDescription" 
		    			name="postDescription" 
		    			id="description" 
		    			placeholder="What is happening? (optional)"
		    			rows="4"
		    			onChange={onDescriptionChangeHandler}
		    		></textarea>
		    	</div>
		    	<div className="FormGroup">
		    		<BaseButton 
		    			btnText="Create Post" 
		    			onClick={createPost}
		    		/>
		    	</div>
		    </AppContainer>
		</div>
	);
}

export default CreatePost;