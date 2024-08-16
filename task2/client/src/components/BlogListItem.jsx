import React from "react";

const BlogListItem = ({ post }) => {
  return (
    <div className="flex items-center justify-between w-auto h-auto px-3 py-3 border border-gray-600 bg-white aspect-square text-black rounded-md">
      <p>{post.title}</p>
    </div>
  );
};

export default BlogListItem;
