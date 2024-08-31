import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      localStorage.setItem("userName", name);
      navigate("/chat");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-xl mb-4">Enter Your Name</h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className="border border-gray-300 p-2 rounded w-full mb-4"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded w-full hover:bg-blue-600"
        >
          Start Chat
        </button>
      </form>
    </div>
  );
};

export default Home;
