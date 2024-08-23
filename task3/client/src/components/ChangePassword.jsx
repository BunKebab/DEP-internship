import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePassword, reset } from "../actions/AuthSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ChangePassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const [isOpen, setIsOpen] = useState(false);

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = () => {
    const userId = user.id;
    dispatch(
      changePassword({
        userId,
        currentPassword,
        newPassword,
      })
    );
    dispatch(reset());
    navigate("/");
    toast.success("Password changed successfully!");
  };

  return (
    <>
      <button
        onClick={toggleModal}
        className="bg-blue-600 text-gray-100 font-bold p-3 rounded-lg w-full"
      >
        Change Password
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white border border-gray-600 rounded-lg p-3 gap-3 w-1/3">
            <h2 className="text-xl font-bold">Change Password</h2>
            <br />
            <div className="flex flex-col items-center justify-around gap-3">
              <form className="w-full">
                <div className="flex flex-col gap-1 text-left mt-1">
                  <label>Current Password</label>
                  <input
                    type="password"
                    placeholder="password"
                    className="border border-green-300 bg-gray-100 text-gray-600 rounded-lg p-3"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="flex flex-col gap-1 text-left mt-1">
                  <label>New Password</label>
                  <input
                    type="password"
                    placeholder="password"
                    className="border border-green-300 bg-gray-100 text-gray-600 rounded-lg p-3"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                  />
                </div>
              </form>
              <br />
              <button
                onClick={handleSubmit}
                className="bg-green-600 text-gray-100 rounded-lg p-3 w-full"
              >
                Submit
              </button>
              <button
                onClick={toggleModal}
                className="bg-gray-600 text-gray-100 rounded-lg p-3 w-full"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChangePassword;
