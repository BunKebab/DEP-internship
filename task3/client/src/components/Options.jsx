import React, { useState } from "react";

import Logout from "../components/Logout";
import ChangePassword from "./ChangePassword";

const Options = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        onClick={toggleModal}
        className="bg-green-600 text-gray-100 p-3 rounded-lg"
      >
        Options
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-1/3 bg-gray-100 shadow-lg border rounded-lg p-3 gap-3 text-center">
            <h2 className="text-xl font-bold">Options</h2>
            <br />
            <div className="flex flex-col items-center justify-around gap-3">
              <Logout />
              <ChangePassword />
              <button
                onClick={toggleModal}
                className="bg-gray-600 text-gray-100 rounded-lg p-3 w-full"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Options;
