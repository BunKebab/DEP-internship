import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts, reset } from "../actions/ProductSlice";
import { toast } from "react-toastify";

import Sidebar from "../components/Sidebar";
import AddProduct from "../components/AddProduct";
import AdminProductCard from "../components/AdminProductCard";

const AdminProucts = () => {
  const dispatch = useDispatch();
  const { products, isError, message } = useSelector((state) => state.product);

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
  }, [isError, message]);

  useEffect(() => {
    dispatch(getProducts());
    dispatch(reset());
  }, []);
  return (
    <div className="flex items-center justify-start gap-3 w-full h-full bg-gray-100 text-green-600 overflow-auto">
      <Sidebar />
      <div className="flex flex-col w-full h-full items-start justify-start gap-3">
        <h1 className="text-2xl font-bold">Products</h1>
        <div className="flex w-full h-full justify-between items-center">
          <div className="flex flex-col w-2/3 h-full">
            {products.map((product) => (
              <AdminProductCard key={product._id} product={product} />
            ))}
          </div>
          <div className="flex w-1/3 h-full items-start justify-center p-3">
            <AddProduct />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProucts;
