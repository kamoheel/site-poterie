import axios from "axios";
import { useState, useCallback, useEffect } from "react";
import Post from "../components/post";

const Blog = () => {
    const [allPosts, setAllPosts] = useState([]);

    const fetchAllPosts = useCallback(
        () => {
            axios({
                method: "GET",
                url: `${process.env.REACT_APP_API_URL}api/posts`,
                withCredentials: true,
              })
                .then((res) => {
                  setAllPosts(res.data);
                })
                .catch((err) => {
                  console.log(err);
                }
                );
            }, [],
    );

    useEffect(()=>{
        fetchAllPosts();
    }, [fetchAllPosts])

    return ( 
    <section id="blog">
        <div id="posts-container">
                    {allPosts.map((post) => {
                        allPosts.sort(function(a, b) {
                          if (a.timestamps < b.timestamps) {
                            return 1;
                          }
                          if (a.timestamps > b.timestamps) {
                            return -1;
                          }
                          return 0;
                        });
                        return (
                            <Post
                            post={post}
                            // fetchAllPosts={fetchAllPosts}
                            // userPseudo={userPseudo}
                            // isAdmin={isAdmin}
                            title={post.title}
                            description={post.description}
                            imageUrl= {post.imageUrl}
                            date={post.timestamps}
                            key={post._id}
                            />
                        );
                    })
                    }
                </div>
    </section> );
}
 
export default Blog;