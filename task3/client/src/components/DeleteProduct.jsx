import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteProduct, reset } from "../actions/ProductSlice";

const DeleteProduct = ({ product }) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const dispatchDelete = () => {
    const productId = product._id;
    dispatch(deleteProduct(productId));
    dispatch(reset());
    toggleModal();
  };
  return (
    <>
      <button
        onClick={toggleModal}
        className="bg-red-600 text-gray-100 font-bold p-3 rounded-lg w-full"
      >
        Delete
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gray-100 border shadow-lg rounded-lg p-3 gap-3">
            <h2 className="text-xl font-bold">Delete?</h2>
            <p>Are you sure you want to delete this product?</p>
            <br />
            <div className="flex flex-col items-center justify-center gap-3">
              <button
                onClick={toggleModal}
                className="bg-gray-600 text-gray-100 rounded-lg p-3 w-full"
              >
                No
              </button>
              <button
                onClick={dispatchDelete}
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

export default DeleteProduct;
