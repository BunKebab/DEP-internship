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
        className="bg-green-600 text-gray-100 p-3 rounded-lg w-full"
      >
        Details
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gray-100 shadow-lg rounded-lg p-5 w-1/3">
            <h2 className="text-xl font-bold mb-3">Order Details</h2>
            <p>
              <strong>Total:</strong> {order.total}Rs
            </p>
            <p>
              <strong>Status:</strong> {order.status}
            </p>
            <p>
              <strong>Date:</strong>{" "}
              {new Date(order.createdAt).toLocaleDateString()}
            </p>

            <h3 className="text-lg font-semibold mt-4 mb-2">Products:</h3>
            {order.products && order.products.length > 0 ? (
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border px-4 py-2 text-left">Product Name</th>
                    <th className="border px-4 py-2 text-left">Quantity</th>
                    <th className="border px-4 py-2 text-left">Price (Rs)</th>
                  </tr>
                </thead>
                <tbody>
                  {order.products.map((product, index) => (
                    <tr key={index} className="border-t">
                      <td className="border px-4 py-2">{product.item.name}</td>
                      <td className="border px-4 py-2">{product.quantity}</td>
                      <td className="border px-4 py-2">
                        {product.item.price} Rs
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No products in this order.</p>
            )}

            <button
              className="bg-gray-600 text-gray-100 rounded-lg p-3 mt-3"
              onClick={toggleModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderDetails;
