import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, clearMessage } from "../actions/CartSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddToCart = ({ product }) => {
  const dispatch = useDispatch();
  const { message } = useSelector((state) => state.cart);

  const dispatchAddToCart = () => {
    dispatch(addToCart(product));
  };

  useEffect(() => {
    if (message) {
      toast.success(message);
      dispatch(clearMessage());
    }
  }, [message, dispatch]);

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
