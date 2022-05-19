import react from "react";
import Post from "./Post";
import "./Posts.css";

const Posts = ({ posts }) => {
  return (
    <div className="container">
      {posts.map((post) => {
        return <Post key={post._id} post={post.post} />;
      })}
    </div>
  );
};

export default Posts;
