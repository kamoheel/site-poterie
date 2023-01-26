import axios from "axios";
import { useState, useCallback, useEffect } from "react";
import CreatePost from "../components/createPost";
import Post from "../components/post";

const Blog = () => {
    const [allPosts, setAllPosts] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

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
    }, [fetchAllPosts]);

    useEffect(() => {
      //expiration du localStorage après 24h
      const hours = 24;
      const now = new Date().getTime();
      const setupTime = localStorage.getItem('setupTime');
      if (setupTime == null) {
        localStorage.setItem('setupTime', now)
      } else {
        if(now-setupTime > hours*60*60*1000) {
          localStorage.clear();
          localStorage.setItem('setupTime', now);
        }
      }
      console.log(localStorage.getItem("loggedIn"));
        if (!localStorage.getItem("loggedIn")) {
          setIsLoggedIn(false);
          return;
          } else {
          setIsLoggedIn(
            JSON.parse(localStorage.getItem("loggedIn"))
          );
          
          }
    }, []);

    return ( 
    <section id="blog">
      {isLoggedIn && <CreatePost fetchAllPosts={fetchAllPosts} />
        }
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
                            isLoggedIn={isLoggedIn}
                            fetchAllPosts={fetchAllPosts}
                            userId={post.userId}
                            />
                        );
                    })
                    }
                </div>
    </section> );
}
 
export default Blog;