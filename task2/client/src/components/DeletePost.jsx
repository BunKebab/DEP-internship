import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deletePost, reset } from "../actions/PostSlice";

const DeletePost = ({ post }) => {
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const dispatchDelete = () => {
    dispatch(deletePost(post._id));
    dispatch(reset());

    setIsOpen(false)
  };

  return (
    <>
      <button
        onClick={openModal}
        className="bg-red-500 text-white font-bold p-3 rounded-full"
      >
        Delete
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white border border-gray-600 rounded-lg p-3 gap-3">
            <h2 className="text-xl font-bold">Delete?</h2>
            <p>Are you sure you want to delete this post?</p>
            <br />
            <div className="flex items-center justify-around">
              <button
                onClick={closeModal}
                className="bg-blue-950 text-blue-100 rounded-full p-3 w-20"
              >
                No
              </button>
              <button
                onClick={dispatchDelete}
                className="bg-red-500 text-white rounded-full p-3 w-20"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeletePost;
