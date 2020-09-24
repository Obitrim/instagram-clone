import React, { useRef } from 'react';
import "../../styles/SingleImageUploader.css";
import DeleteIcon from "@material-ui/icons/Delete";
import AddAPhoto from "@material-ui/icons/AddAPhoto";

const SingleImageUploader = ({ previewUrl, onChange }) => {
    const FileInput = useRef(null);

    function onChangeHandler(){
        let file = FileInput.current.files[0];
        onChange(file);
    }

    function openFileDialog(){
        FileInput.current.click();
    }

    return (
        <div className="SingleImageUploader" onClick={openFileDialog}>
        	{previewUrl 
                ? <img  className="SingleImageUploader__Img" src={previewUrl} alt="Uploaded image"/>
                : null }
        	<input type="file"
                className="SingleImageUploader__FileInput" 
                onChange={onChangeHandler}
                ref={FileInput}
                />
        	<div className="SingleImageUploader__controls">
        		{previewUrl 
                    ? <DeleteIcon className="Icon Icon--Delete"/> 
                    : <AddAPhoto className="Icon Icon--Add"/>}
        	</div>
        </div>
    )
}

export default SingleImageUploader;