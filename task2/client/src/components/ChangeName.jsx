import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeName, reset } from "../actions/AuthSlice";

const ChangeName = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    newName: "",
  });

  const { newName } = formData;

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

  const updateUsername = async (e) => {
    e.preventDefault();
    const userId = user.id;
    dispatch(changeName({ userId, newName }));
    dispatch(reset());

    setIsOpen(false);

    setFormData({ newName: "" });
  };

  return (
    <>
      <button
        onClick={openModal}
        className="bg-gray-600 text-white font-bold p-3 rounded-full"
      >
        Change Name
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white border border-gray-600 rounded-lg p-3 gap-3">
            <h2 className="text-xl font-bold">Change name</h2>
            <br />
            <form>
              <div className="flex flex-col items-start justify-center">
                <input
                  onChange={setInput}
                  placeholder={user.name}
                  value={newName}
                  type="text"
                  name="newName"
                  id="newName"
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
                onClick={updateUsername}
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

export default ChangeName;
