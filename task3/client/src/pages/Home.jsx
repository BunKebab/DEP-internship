import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user && user.role === "Admin") {
      navigate("/dashboard");
    }
  }, [user, navigate]);
  
  return (
    <div className="flex flex-col items-center justify-center h-full w-full p-3 bg-gray-100 text-green-600 gap-5">
      <div className="flex flex-col text-center mt-5 gap-3">
        <h1 className="font-bold text-3xl">Welcome to our online store!</h1>
        <p className="text-sm">
          Here you can find the best deals and products.
        </p>
      </div>
      <br />
      <div>
        <button className="button bg-green-600 text-gray-100 rounded-lg p-5">
          <Link to={"/products"}>View full products catalogue</Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
