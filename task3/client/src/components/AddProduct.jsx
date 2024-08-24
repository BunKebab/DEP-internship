import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct, reset } from "../actions/ProductSlice";

const AddProduct = () => {
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const convertToBase64 = async (file) => {
    const base64Image = await readFileAsBase64(file);
    setImage(base64Image);
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
    const file = e.target.files[0];
    await convertToBase64(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const productData = { name, description, price, image };
    dispatch(addProduct(productData));
    dispatch(reset());
    setName("");
    setDescription("");
    setPrice("");
    setImage(null);
    toggleModal();
  };

  return (
    <>
      <button
        onClick={toggleModal}
        className="bg-green-600 text-gray-100 font-bold p-3 rounded-lg w-full mt-3"
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
                  <label>Product image</label>
                  <input
                    type="file"
                    accept="image/*"
                    className="border border-green-300 bg-gray-100 text-gray-600 rounded-lg p-3"
                    multiple
                    onChange={handleFileChange}
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
