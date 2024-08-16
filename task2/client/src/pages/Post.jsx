import React from "react";
import { useLocation } from "react-router-dom";

const Post = () => {
  const location = useLocation();
  const { post } = location.state || {};

  return (
    <div className="flex flex-col items-center justify-start w-full h-full gap-3">
      <div className="flex items-center justify-center text-center w-full h-1/3 px-3">
      <h1 className="font-bold text-2xl mb-3">{post.title}</h1>
      </div>
      <br />
      <div className="flex items-start justify-start w-full h-full px-10 pt-3">
      <p className="text-left">{post.body}</p>
      </div>
    </div>
  );
};

export default Post;
