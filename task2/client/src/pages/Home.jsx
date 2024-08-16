import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts, reset } from "../actions/PostSlice";
import { Link } from "react-router-dom";

import BlogListItem from "../components/BlogListItem";

const Home = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getAllPosts());
    dispatch(reset());
  }, [dispatch]);

  return (
    <>
      <div className="flex flex-col w-full h-1/3 items-center justify-center px-5 py-3">
        <h1 className="font-bold text-2xl">Welcome to beLogged</h1>
        <p>An online blogging platform</p>
      </div>
      <div className="flex flex-col w-full h-2/3 items-center justify-start px-5 py-3 gap-3 bg-blue-950 text-blue-100">
        <h1 className="font-bold text-2xl">Read Blogs</h1>
        <div className="grid grid-cols-6 gap-3">
          {posts.map((post) => (
            <div>
              <Link to={`/post/${post._id}`} state={{ post }}>
                <BlogListItem key={post._id} post={post} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
