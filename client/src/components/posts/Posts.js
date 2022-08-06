import "./posts.css";
// import { useState, useEffect } from "react";
import Post from "../post/Post";
// import axios from "axios";

const Posts = ({ posts }) => {
  return (
    <div className="posts">
      {posts.map((post) => {
        return <Post key={post._id} post={post} />;
      })}
    </div>
  );
};

export default Posts;
