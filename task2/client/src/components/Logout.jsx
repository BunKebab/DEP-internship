import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../actions/AuthSlice";

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const logoutUser = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <>
      <button
        onClick={openModal}
        className="bg-red-500 text-white font-bold p-3 rounded-full"
      >
        Logout
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white border border-gray-600 rounded-lg p-3 gap-3">
            <h2 className="text-xl font-bold">Logout?</h2>
            <p>Are you sure you want to logout?</p>
            <br />
            <div className="flex items-center justify-around">
              <button
                onClick={closeModal}
                className="bg-blue-950 text-blue-100 rounded-full p-3 w-20"
              >
                No
              </button>
              <button
                onClick={logoutUser}
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

export default Logout;
