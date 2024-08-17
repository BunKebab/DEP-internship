import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserPosts, reset } from "../actions/PostSlice";
import { toast } from "react-toastify";

import MyBlogListItem from "../components/MyBlogListItem";

const MyBlogs = () => {
  const dispatch = useDispatch();
  const { userPosts, isLoading, isError } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getUserPosts());
    return () => {
      dispatch(reset());
    };
  }, [dispatch]);

  if (isError) {
    toast.error(message);
  }

  return (
    <div className="flex flex-col items-center justify-start w-full h-full px-5 py-6 gap-6">
      <h1 className="font-bold text-3xl">My Blogs</h1>
      <div className="flex flex-col w-full px-4 py-6 gap-6 rounded-lg border border-gray-600">
        {userPosts.length === 0 ? (
          <p className="text-center">No blogs available.</p>
        ) : (
          userPosts.map((post) => <MyBlogListItem key={post._id} post={post} />)
        )}
      </div>
    </div>
  );
};

export default MyBlogs;
