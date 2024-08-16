import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserPosts, reset } from "../actions/PostSlice";

import MyBlogListItem from "../components/MyBlogListItem";

const MyBlogs = () => {
  const dispatch = useDispatch();
  const { userPosts } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getUserPosts());
  }, []);

  return (
    <div className="flex flex-col items-center justify-start w-full h-full px-5 py-3 gap-3">
      <h1 className="font-bold text-2xl">My Blogs</h1>
      <div className="flex flex-col w-2/3 h-auto px-3 py-3 gap-3 border border-gray-600 rounded-2xl">
        {userPosts.map((post) => (
          <MyBlogListItem key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default MyBlogs;
