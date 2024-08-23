import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts, reset } from "../actions/ProductSlice";
import { toast } from "react-toastify";

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
    <div className="flex flex-col items-center justify-around h-full w-full p-3 bg-gray-100 text-green-600">
      <div className="flex flex-col text-center mt-5 gap-3">
        <h1 className="font-bold text-3xl">Products</h1>
      </div>
      {isLoading ? (
        <Spinner />
      ) : (
        products.map((product) => (
          <div
            key={product._id}
            className="flex flex-row items-center justify-between gap-3 text-gray-800"
          >
            <p>{product.name}</p>
            <p>{product.price}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Products;
