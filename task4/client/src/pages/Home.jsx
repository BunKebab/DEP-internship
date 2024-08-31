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
    <div className="flex items-center justify-center h-full bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl mb-4">Enter Your Name</h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className="border border-gray-600 text-gray-600 p-3 rounded-lg w-full mb-3"
        />
        <button
          type="submit"
          className="bg-blue-600 text-gray-100 py-2 px-4 rounded-lg w-full"
        >
          Start Chat
        </button>
      </form>
    </div>
  );
};

export default Home;
