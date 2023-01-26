import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDown } from "@fortawesome/free-solid-svg-icons";
import { faCircleUp } from "@fortawesome/free-solid-svg-icons";

const CreatePost = ({ fetchAllPosts }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [emptyField, setEmptyField] = useState(false);
    const [createToggle, setCreateToggle] = useState(false);
    const [publicationConfirmed, setPublicationConfirmed] =useState(false);

    const handleDescriptionField = (e) => {
        setEmptyField(false);
        setDescription(e.target.value);  
    }

    const handleTitleField = (e) => {
        setEmptyField(false);
        setTitle(e.target.value);  
    }

    const handlePostCreation = (e) => {
        e.preventDefault();
        if (title === "" && description === "" && imageUrl === "") {
            setEmptyField(true);
        } else {
            const formData = new FormData()
            formData.append('title', title)
            formData.append('description', description)
            formData.append('imageUrl', imageUrl)

            axios({
                method: "POST",
                url: `${process.env.REACT_APP_API_URL}api/posts`,
                withCredentials: true,
                data: formData,
            })
                .then((res) => {
                    setTitle("");
                    setDescription("");
                    setImageUrl("");
                    fetchAllPosts();
                    setPublicationConfirmed(true);
                    setCreateToggle(false);
                    // handleScrollToTop();
                })
                .catch((err) => {
                console.log(err);
                });
        }
    };

    return ( 
        <div className='create-post-container'>
            {publicationConfirmed && <p className="confirmation-message">Votre publication a été publiée !</p>}
            <Link
                    onClick={() => setCreateToggle(!createToggle)}
                >
                    <p>Créer une publication </p>
                    {createToggle ? <FontAwesomeIcon icon={faCircleUp} className="fa" /> 
                : 
                <FontAwesomeIcon icon={faCircleDown} className="fa" />}
            </Link>
            {createToggle && (
                <form className='form' onSubmit={handlePostCreation}>
                <label htmlFor='title' className='postcreation--label'>Titre</label>
                <input type="text" name="title" id="title" value={title} onChange={handleTitleField} className='postcreation--input'/>
                <label htmlFor='description' className='postcreation--label'>Description</label>
                <textarea type='text' id='description' value={description} onChange={handleDescriptionField} className='postcreation--input' />
                <label htmlFor='image' className='postcreation--label'>Image</label>
                <input type='file' id='image' accept='image/*' name="image" onChange={(e) => setImageUrl(e.target.files[0])} className='postcreation--input' />
                <button className='send-button' type="submit">Publier</button>
                {emptyField && <div className="emptyfields--alert">Veuillez remplir au moins un des champs</div>}
            </form>
            )}
            
        </div>
     );
}
 
export default CreatePost;