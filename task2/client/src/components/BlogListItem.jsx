import React from "react";

const BlogListItem = ({ post }) => {
  return (
    <div className="bg-white p-5 border border-gray-600 rounded-full text-black">
      <h2 className="font-semibold text-xl">{post.title}</h2>
      <p className="text-sm text-gray-500 mt-2">
        {new Date(post.createdAt).toLocaleDateString()} at{" "}
        {new Date(post.createdAt).toLocaleTimeString()}
      </p>
    </div>
  );
};

export default BlogListItem;
