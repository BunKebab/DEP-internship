import React, { useState } from "react";
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

  const setInput = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const dispatchEdit = async (e) => {
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
        className="bg-gray-600 text-white font-bold p-3 rounded-full"
      >
        Edit Post
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white border border-gray-600 rounded-lg p-3 gap-3">
            <h2 className="text-xl font-bold">Edit Post</h2>
            <br />
            <form>
              <div className="flex flex-col items-start justify-center">
                <input
                  onChange={setInput}
                  value={newBody}
                  type="textarea"
                  name="newBody"
                  id="newBody"
                  className="rounded-full border border-gray-600 p-3 w-full"
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
