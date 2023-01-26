import { Link } from "react-router-dom";
import SmallPot from "../assets/enfants.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import DeletePopUp from "./deletePopUp";
import EditPopUp from "./editPopUp";
import axios from "axios";

const Post = ({ post, title, description, imageUrl, date, isLoggedIn, fetchAllPosts, userId}) => {
    const [deletePopUp, setDeletePopUp] = useState({
        show: false,
        id: null
    });
    const [editPopUp, setEditPopUp] = useState({
        show: false,
        id: null, 
        title: null,
        description: null
    });
    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "long", day: "numeric", hour: 'numeric', minute: 'numeric' }
        return new Date(dateString).toLocaleDateString('fr-FR', options)
    }

    const handleEdit = (id, title, description) => {
        setEditPopUp({
            show: true,
            id,
            title,
            description,
        });
    }

    const handleEditConfirmed = () => {
        fetchAllPosts();
        setEditPopUp({
            show: false,
            id: null, 
            description: null
        });
    }

    const handleEditCanceled = () => {
        setEditPopUp({
            show: false,
            id: null, 
            description: null
        });
    };

    const handleDelete = (id) => {
        setDeletePopUp({
            show: true,
            id,
        });
    }

    const handleDeleteConfirmed = () => {
        if (deletePopUp.show && deletePopUp.id) {
            axios({
            method: "DELETE",
            url: `${process.env.REACT_APP_API_URL}api/posts/${deletePopUp.id}`,
            withCredentials: true,
            data: {
                userId
            },
            })
            .then((res) => {
                fetchAllPosts();
                console.log('Le post a bien été supprimé');
                setDeletePopUp({
                    show: false,
                    id: null
                });
            })
            .catch((err) => {
                console.log(`Echec suppression de post : ${err}`);
            });
        }
      };

    const handleDeleteCanceled = () => {
        setDeletePopUp({
            show: false,
            id: null
        });
    };

    return ( 
    <article className="post">
        <div className="post-header">
        <h2>{title}</h2>
        {isLoggedIn && 
        <div className="post-editing">
            <Link
                className="post-editing-link"
                onClick={() => handleEdit(post._id, title, description)}
            >
                <FontAwesomeIcon icon={faPenToSquare} className='fa-icon'/>
                <p>Modifier</p>
            </Link>
            <Link
                className="post-editing-link"
                onClick={() => handleDelete(post._id)}
            >
            <FontAwesomeIcon icon={faTrash} className='fa-icon'/>
            <p>Supprimer</p>
            </Link>
        </div>}
        </div>
        <div className="post-body">
            {post.imageUrl && (
                <div className="post-image-container">
                    <img className='post-image' src={imageUrl} alt={title}/>
                </div>
            )}
            <p className='post-description'>{description}</p>
        </div>
        <div className="post-footer">
        <img src={SmallPot} alt='Dessin de petit pot' />
        <p> ATC, le {formatDate(date)}</p>
        {editPopUp.show && (
                    <EditPopUp 
                    postId={editPopUp.id}
                    postTitle={editPopUp.title}
                    postDescription={editPopUp.description}
                    handleEditConfirmed={handleEditConfirmed}
                    handleEditCanceled={handleEditCanceled}
                    />
                )}
        {deletePopUp.show && (
                    <DeletePopUp
                    handleDeleteConfirmed={handleDeleteConfirmed}
                    handleDeleteCanceled={handleDeleteCanceled}
                    post={post}
                    />
                )}
        </div>

        
    </article> );
}

export default Post;