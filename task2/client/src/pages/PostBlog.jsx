import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createPost, reset } from "../actions/PostSlice";
import { toast } from "react-toastify";

const PostBlog = () => {
  const dispatch = useDispatch();
  const { posts, isError, message } = useSelector((state) => state.post);
  const [formData, setFormData] = useState({
    title: "",
    body: "",
  });

  const { title, body } = formData;

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    dispatch(reset());
  }, [posts, isError, message, dispatch]);

  const setInput = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const makePost = (e) => {
    e.preventDefault();

    const postData = {
      title: title,
      body: body,
    };
    dispatch(createPost(postData));
    dispatch(reset);

    setFormData({ title: "", body: "" });
  };

  return (
    <div className="flex flex-col items-center justify-start w-full h-full px-5 py-3 gap-3">
      <h1 className="font-bold text-2xl">Make Post</h1>
      <div className="flex flex-col w-2/3 h-auto px-3 py-3 gap-3">
        <form onSubmit={makePost}>
          <div className="flex flex-col items-start justify-center">
            <label htmlFor="title">Title</label>
            <input
              className="border border-gray-600 rounded-lg w-2/3 h-2/3"
              type="text"
              name="title"
              id="title"
              value={title}
              onChange={setInput}
            />
          </div>
          <br />
          <div className="flex flex-col items-start justify-center">
            <label htmlFor="body">Body</label>
            <input
              className="border border-gray-600 rounded-lg w-2/3 h-2/3"
              type="textarea"
              name="body"
              id="body"
              value={body}
              onChange={setInput}
            />
          </div>
          <br />
          <button
            className="w-auto rounded-full p-3 bg-blue-950 text-blue-100"
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
