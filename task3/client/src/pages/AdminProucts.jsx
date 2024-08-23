import React from "react";
import { useSelector } from "react-redux";

import Sidebar from "../components/Sidebar";
import AddProduct from "../components/AddProduct";

const AdminProucts = () => {
  const { products } = useSelector((state) => state.product);
  return (
    <div className="flex items-center justify-start gap-3 w-full h-full bg-gray-100 text-green-600">
      <Sidebar />
      <div className="flex flex-col w-full h-full items-start justify-start gap-3">
        <h1 className="text-2xl font-bold">Products</h1>
        <div className="flex justify-between items-center">
          <div className="w-full h-full">
            {products.map((product) => (
              <div key={product._id}>
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p>Price: {product.price}</p>
              </div>
            ))}
          </div>
          <AddProduct />
        </div>
      </div>
    </div>
  );
};

export default AdminProucts;
