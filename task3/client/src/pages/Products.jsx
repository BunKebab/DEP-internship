import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts, reset } from "../actions/ProductSlice";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

import ProductCard from "../components/ProductCard";

const Products = () => {
  const dispatch = useDispatch();
  const { products, isLoading, isError, message } = useSelector(
    (state) => state.product
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
  }, []);

  useEffect(() => {
    dispatch(getProducts());
    dispatch(reset());
  }, [dispatch]);
  return (
    <div className="flex flex-col items-center h-full w-full p-3 bg-gray-100 text-green-600 overflow-auto">
      <div className="flex flex-col text-center mt-5 gap-3">
        <h1 className="font-bold text-3xl">Products</h1>
      </div>
      {isLoading ? (
        <h1>Fetching products...</h1>
      ) : (
        <div className="grid grid-cols-5 h-full w-full gap-3">
          {products.map((product) => (
            <Link
              key={product._id}
              to={`/product-details/${product._id}`}
              state={{ product }}
            >
              <div className="flex items-center justify-center">
                <ProductCard product={product} />
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
