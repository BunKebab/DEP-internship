import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct, reset } from "../actions/ProductSlice";

const AddProduct = () => {
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [pictures, setPictures] = useState([]);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const convertToBase64 = async (files) => {
    const base64Images = [];

    for (const file of files) {
      const base64 = await readFileAsBase64(file);
      base64Images.push(base64);
    }

    setPictures(base64Images);
  };

  const readFileAsBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const handleFileChange = async (e) => {
    const files = e.target.files;
    await convertToBase64(files);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const productData = { name, description, price, pictures };
    dispatch(addProduct(productData));
    dispatch(reset());
    setName("");
    setDescription("");
    setPrice("");
    setPictures([]);
    toggleModal();
  };

  return (
    <>
      <button
        onClick={toggleModal}
        className="bg-green-600 text-gray-100 font-bold p-3 rounded-lg w-full"
      >
        Add product
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white border border-gray-600 rounded-lg p-3 gap-3 w-1/3">
            <h2 className="text-xl font-bold">Add Product</h2>
            <br />
            <div className="flex flex-col items-center justify-around gap-3">
              <form className="w-full">
                <div className="flex flex-col gap-1 text-left mt-1">
                  <label>Product name</label>
                  <input
                    type="text"
                    className="border border-green-300 bg-gray-100 text-gray-600 rounded-lg p-3"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="flex flex-col gap-1 text-left mt-1">
                  <label>Product description</label>
                  <input
                    type="text"
                    className="border border-green-300 bg-gray-100 text-gray-600 rounded-lg p-3"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  />
                </div>
                <div className="flex flex-col gap-1 text-left mt-1">
                  <label>Product price (Rs)</label>
                  <input
                    type="number"
                    className="border border-green-300 bg-gray-100 text-gray-600 rounded-lg p-3"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                  />
                </div>
                <div className="flex flex-col gap-1 text-left mt-1">
                  <label>Product images</label>
                  <input
                    type="file"
                    accept="image/*"
                    className="border border-green-300 bg-gray-100 text-gray-600 rounded-lg p-3"
                    multiple
                    onChange={handleFileChange}
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

export default AddProduct;
