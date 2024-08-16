import React from "react";

import EditPostForm from "./EditPostForm";
import DeletePost from "./DeletePost";

const MyBlogListItem = ({ post }) => {
  return (
    <div className="flex items-center justify-between w-auto h-auto px-3 py-3 border border-gray-600 rounded-md">
      <p>{post.title}</p>
      <div className="flex items-center justify-center gap-3">
        <EditPostForm post={post} />
        <DeletePost post={post} />
      </div>
    </div>
  );
};

export default MyBlogListItem;
