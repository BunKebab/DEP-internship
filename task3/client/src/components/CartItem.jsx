import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../actions/CartSlice";
import { toast } from "react-toastify";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(item.quantity);

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    if (newQuantity < 1) {
      toast.error("Quantity must be at least 1");
      return;
    }
    setQuantity(newQuantity);
    dispatch(updateQuantity({ id: item.id, quantity: newQuantity }));
  };

  const handleRemoveItem = () => {
    dispatch(removeFromCart(item.id));
    toast.success("Item removed from cart");
  };

  return (
    <div className="flex items-center justify-between p-3">
      <div className="flex items-center gap-3">
        <img
          src={item.images[0]}
          alt={item.name}
          className="w-20 h-20 object-cover rounded-lg"
        />
        <div className="flex flex-col">
          <h2 className="text-lg font-bold text-green-600">{item.name}</h2>
          <span className="text-gray-600">Price: {item.price}Rs</span>
          <div className="flex items-center gap-2 mt-2">
            <button
              onClick={handleRemoveItem}
              className="bg-red-600 text-gray-100 font-bold p-2 rounded-lg"
            >
              Remove
            </button>
            <input
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
              className="p-3 rounded-lg w-20"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
