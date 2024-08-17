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
      <div className="flex flex-col w-full h-80 items-center justify-center py-3 text-center">
        <h1 className="font-bold text-3xl">Welcome to beLogged</h1>
        <p className="text-lg mt-2">An online blogging platform</p>
      </div>

      <div className="flex flex-col items-center justify-start w-full px-5 py-5 bg-blue-950 text-white gap-6">
        <h1 className="font-bold text-3xl">Read Blogs</h1>

        <div className="flex flex-col w-1/2 max-h-96 overflow-y-auto gap-6 scrollbar-thin scrollbar-thumb-gray-400">
          {posts.map((post) => (
            <Link key={post._id} to={`/post/${post._id}`} state={{ post }}>
              <BlogListItem post={post} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
