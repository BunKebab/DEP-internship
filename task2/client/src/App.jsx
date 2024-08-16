import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Post from "./pages/Post";
import PostBlog from "./pages/PostBlog";
import MyBlogs from "./pages/MyBlogs";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="flex flex-col w-screen h-screen">
          <Navbar />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Login />} path="/login" />
            <Route element={<Signup />} path="/signup" />
            <Route element={<Post />} path="/post/:id" />
            <Route element={<MyBlogs />} path="/blogs" />
            <Route element={<PostBlog />} path="/new-blog" />
            <Route element={<Profile />} path="/profile" />
          </Routes>
        </div>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
