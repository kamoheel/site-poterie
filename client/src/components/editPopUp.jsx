import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const EditPopUp = ({postId, postTitle, postDescription, handleEditConfirmed, handleEditCanceled}) => {
    const [newTitle, setNewTitle] = useState(`${postTitle}`);
    const [newDescription, setNewDescription] = useState(`${postDescription}`);
    const [newImageUrl, setNewImageUrl] = useState("");

    function handlePostEdit(e) {
        e.preventDefault();
        const formData = new FormData()
        newTitle && formData.append('title', newTitle)
        newDescription && formData.append('description', newDescription)
        newImageUrl && formData.append('imageUrl', newImageUrl)

        axios({
            method: "PUT",
            url: `${process.env.REACT_APP_API_URL}api/posts/${postId}`,
            withCredentials: true,
            data: formData,
            })
            .then((res) => {
                handleEditConfirmed();
                console.log('Le post a bien été modifié')
            })
            .catch((err) => {
                console.log(`Echec modification de post : ${err}`);
            });
    }
    
    return ( 
        <div className="edit popup--box">
            <div className='popup--header'>
                <h2 className="popup--title">Modifier le post</h2>
                <span className='popup--close' onClick={handleEditCanceled}>
                    <FontAwesomeIcon icon={faXmark} className='x-icon'/>
                </span>
                

            </div>
            <form className='form' onSubmit={handlePostEdit}>
            <label htmlFor='title' className='postcreation--title'>Titre</label>
                <textarea 
                    type='text' 
                    id='title' 
                    className='popup--input'
                    value={newTitle} 
                    onChange={(e) => setNewTitle(e.target.value)} 
                />
                <label htmlFor='description' className='postcreation--description'>Description</label>
                <textarea 
                    type='text' 
                    id='description' 
                    className='popup--input'
                    value={newDescription} 
                    onChange={(e) => setNewDescription(e.target.value)} 
                />
                <label htmlFor='image' className='postcreation--image'>Image</label>
                <input 
                    type='file' 
                    id='image' 
                    accept='image/*' 
                    name="image" 
                    className='popup--input'
                    onChange={(e) => setNewImageUrl(e.target.files[0])} 
                />
                <button className='send-button' type="submit">Enregistrer</button>
            </form>
        </div>
     );
}
 
export default EditPopUp;