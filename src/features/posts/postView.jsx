import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./postSlice";

const Postsviews = () => {
  const { isLoading, posts, error } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div>
      <h1>Hello Post View</h1>
      {isLoading && <h3>Loading......!</h3>}
      {error && <h3>{error}</h3>}
      {posts &&
        posts.map((post) => {
          return (
            <section>
              <article>
                <h2>{post.userId}</h2>
                <h4>{post.title}</h4>
                <p>{post.body}</p>
              </article>
            </section>
          );
        })}
    </div>
  );
};

export default Postsviews;
