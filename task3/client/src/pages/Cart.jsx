import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { clearCart } from "../actions/CartSlice";
import { toast } from "react-toastify";

import CartItem from "../components/CartItem";

const Cart = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);

  const handleClearCart = () => {
    dispatch(clearCart());
    toast.success("Cart cleared");
  };

  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="flex flex-col items-center p-3 bg-gray-100 w-full h-full">
      <h1 className="text-3xl font-bold text-green-600 mb-3">Your Cart</h1>
      <div className="w-full max-w-4xl bg-gray-100 rounded-lg shadow-lg p-3">
        {items.length === 0 ? (
          <p className="text-lg text-gray-600">Your cart is empty</p>
        ) : (
          <div>
            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
            <div className="flex justify-between mt-3">
              <button
                onClick={handleClearCart}
                className="bg-red-600 text-gray-100 font-bold p-3 rounded-lg"
              >
                Clear Cart
              </button>
              <span className="text-xl font-bold text-green-600">
                Total: {totalPrice} Rs
              </span>
              <Link to="/checkout">
                <button className="bg-green-600 text-gray-100 font-bold p-3 rounded-lg">
                  Proceed to Checkout
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
