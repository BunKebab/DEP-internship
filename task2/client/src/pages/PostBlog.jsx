import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { createPost, reset } from "../actions/PostSlice";
import { toast } from "react-toastify";

const PostBlog = () => {
  const dispatch = useDispatch();
  const { isError, message } = useSelector((state) => state.post);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    dispatch(reset());
  }, [isError, message, dispatch]);

  const changeTitle = (e) => {
    setTitle(e.target.value);
  };

  const changeBody = (value) => {
    setBody(value);
  };

  const makePost = (e) => {
    e.preventDefault();

    const postData = { title, body };
    dispatch(createPost(postData));
    dispatch(reset());

    setTitle(""); 
    setBody(""); 
  };

  return (
    <div className="flex flex-col items-center justify-start w-full h-full px-5 py-3 gap-3">
      <h1 className="font-bold text-2xl">Make Post</h1>
      <div className="flex flex-col w-2/3 h-auto px-3 py-3 gap-3">
        <form onSubmit={makePost}>
          <div className="flex flex-col items-start justify-center w-full">
            <label htmlFor="title">Title</label>
            <input
              className="border border-gray-600 rounded-lg w-full"
              type="text"
              name="title"
              id="title"
              value={title}
              onChange={changeTitle}
            />
          </div>
          <div className="flex flex-col items-start justify-center w-full h-full">
            <label htmlFor="body">Body</label>
            <ReactQuill
              value={body}
              onChange={changeBody}
              theme="snow"
              className="w-full h-full"
            />
          </div>
          <br />
          <button
            className="w-full rounded-full p-3 bg-blue-950 text-blue-100 mt-7"
            type="submit"
          >
            Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostBlog;
