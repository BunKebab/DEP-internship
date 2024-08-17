import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useDispatch } from "react-redux";
import { editPost, reset } from "../actions/PostSlice";

const EditPostForm = ({ post }) => {
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const body = post.body;
  const [formData, setFormData] = useState({
    newBody: body,
  });

  const { newBody } = formData;

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleQuillChange = (value) => {
    setFormData((prevState) => ({
      ...prevState,
      newBody: value, // ReactQuill provides the updated HTML content directly
    }));
  };

  const dispatchEdit = (e) => {
    e.preventDefault();
    const postId = post._id;
    dispatch(editPost({ postId, newBody }));
    dispatch(reset());

    setIsOpen(false);

    setFormData({ newBody: "" });
  };

  return (
    <>
      <button
        onClick={openModal}
        className="bg-gray-600 text-white font-bold p-3 rounded-full w-full"
      >
        Edit Post
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white border border-gray-600 rounded-lg p-3 gap-3 w-1/2">
            <h2 className="text-xl font-bold">Edit Post</h2>
            <br />
            <form>
              <div className="flex flex-col items-start justify-center w-full">
                <ReactQuill
                  value={newBody}
                  onChange={handleQuillChange}
                  theme="snow"
                  className="w-full"
                />
              </div>
            </form>
            <br />
            <div className="flex items-center justify-around">
              <button
                onClick={closeModal}
                className="bg-gray-600 text-white rounded-full p-3 w-20"
              >
                Close
              </button>
              <button
                onClick={dispatchEdit}
                className="bg-blue-950 text-white rounded-full p-3 w-20"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EditPostForm;
