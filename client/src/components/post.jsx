import SmallPot from "../assets/enfants.png"

const Post = ({ post, title, description, imageUrl, date}) => {
    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "long", day: "numeric", hour: 'numeric', minute: 'numeric' }
        return new Date(dateString).toLocaleDateString('fr-FR', options)
    }
    return ( 
    <article className="post">
        <div className="post-header">
        
        <h2>{title}</h2>
        </div>
        <div className="post-body">
            {post.imageUrl && (
                <div className="post-image-container">
                    <img className='post-image' src={imageUrl} alt={title} width="640" height="360"/>
                </div>
            )}
            <p className='post-description'>{description}</p>
        </div>
        <div className="post-footer">
        <img src={SmallPot} alt='Dessin de petit pot' />
        <p> ATC, le {formatDate(date)}</p>
        </div>
    </article> );
}
 
export default Post;