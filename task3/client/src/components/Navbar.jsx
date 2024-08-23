import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Options from "./Options";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <nav className="sticky flex items-center justify-between bg-gray-100 text-green-600 w-full h-16 px-3 py-5">
      <div className="navbar-start font-bold text-lg">
        <Link to={"/"}>E-commerce</Link>
      </div>
      <div className="navbar-end flex items-center justify-end gap-5 w-1/4">
        <Link
          to={"/products"}
          className="hover:bg-green-600 hover:text-gray-100 hover:p-3 hover:underline hover:rounded-lg"
        >
          Products
        </Link>
        <Link
          to={"/cart"}
          className="hover:bg-green-600 hover:text-gray-100 hover:p-3 hover:underline hover:rounded-lg"
        >
          Cart
        </Link>
        {user ? (
          <Options />
        ) : (
          <button className="rounded-lg p-3 bg-green-600 text-gray-100">
            <Link to={"/login"}>Login</Link>
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
