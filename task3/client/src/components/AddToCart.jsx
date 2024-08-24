import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../actions/CartSlice";

const AddToCart = ({ product }) => {
  const dispatch = useDispatch();

  const dispatchAddToCart = () => {
    dispatch(addToCart(product));
  };
  return (
    <button
      onClick={dispatchAddToCart}
      className="bg-green-600 text-gray-100 p-3 rounded-lg w-full"
    >
      Add to Cart
    </button>
  );
};

export default AddToCart;
