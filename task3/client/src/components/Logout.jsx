import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { logout, reset } from "../actions/AuthSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const dispatchLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
    toast.success("Logged out successfully!");
  };

  return (
    <>
      <button
        onClick={toggleModal}
        className="bg-red-600 text-gray-100 font-bold p-3 rounded-lg w-full"
      >
        Logout
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white border border-gray-600 rounded-lg p-3 gap-3 w-1/3">
            <h2 className="text-xl font-bold">Logout</h2>
            <p>Are you sure you want to logout?</p>
            <br />
            <div className="flex flex-col items-center justify-around gap-3">
              <button
                onClick={toggleModal}
                className="bg-green-600 text-gray-100 rounded-lg p-3 w-full"
              >
                No
              </button>
              <button
                onClick={dispatchLogout}
                className="bg-red-600 text-gray-100 rounded-lg p-3 w-full"
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

export default Logout;
