import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <nav className="flex items-center justify-between sticky bg-blue-950 text-blue-100 w-full h-auto px-5 py-3">
      <div className="navbar-start font-extrabold text-xl">
        <h1>
          <Link to={"/"}>beLogged</Link>
        </h1>
      </div>
      {user ? (
        <>
          <div className="navbar-end flex items-center justify-between w-1/4">
            <Link to={"/blogs"}>My Blogs</Link>
            <Link to={"/new-blog"}>Create Post</Link>
            <button className="rounded-full px-2 py-2 bg-blue-100 text-blue-950">
              <Link to={"/profile"}>Profile</Link>
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="navbar-end flex items-center justify-end w-1/4">
            <button className="rounded-full px-2 py-2 bg-blue-100 text-blue-950">
              <Link to={"/login"}>Start Blogging</Link>
            </button>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
