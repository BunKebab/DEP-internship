import React from "react";
import { useLocation } from "react-router-dom";

const Post = () => {
  const location = useLocation();
  const { post } = location.state || {};

  return (
    <div className="flex flex-col items-center justify-start w-full h-full gap-6 p-6">
      <div className="w-full text-center mb-4">
        <h1 className="font-bold text-3xl mb-2">{post.title}</h1>
        <hr className="border-t-2 border-gray-600 w-2/3 mx-auto" />
      </div>

      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-8 overflow-y-auto">
        <div
          className="prose lg:prose-lg text-gray-800"
          dangerouslySetInnerHTML={{ __html: post.body }}
        />
      </div>
    </div>
  );
};

export default Post;
