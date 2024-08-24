import React, { useState } from "react";

const OrderDetails = ({ order }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        onClick={toggleModal}
        className="bg-green-600 text-gray-100 font-bold p-3 rounded-lg w-full hover:bg-green-700"
      >
        Details
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white border border-gray-600 rounded-lg p-5 w-1/3 relative">
            <button
              onClick={toggleModal}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
            >
              &times;
            </button>
            <h2 className="text-xl font-bold mb-3">Order Details</h2>
            <p><strong>Total:</strong> {order.total}Rs</p>
            <p><strong>Status:</strong> {order.status}</p>
            <p><strong>Date:</strong> {new Date(order.createdAt).toLocaleDateString()}</p>

            <h3 className="text-lg font-semibold mt-4 mb-2">Products:</h3>
            {order.products && order.products.length > 0 ? (
              <ul className="list-disc pl-5">
                {order.products.map((product, index) => (
                  <li key={index} className="mb-2 flex gap-1">
                    <p><strong>Product Name:</strong> {product.item.name}</p>
                    <p><strong>Quantity:</strong> {product.quantity}</p>
                    <p><strong>Price:</strong> {product.item.price}Rs</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No products in this order.</p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default OrderDetails;
