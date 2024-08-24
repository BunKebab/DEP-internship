import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { makeOrder, reset } from "../actions/OrderSlice";
import { toast } from "react-toastify";

const Checkout = () => {
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("COD");
  const [total, setTotal] = useState(0);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);
  const cartItems = useSelector((state) => state.cart.items);
  const { isSuccess, isError, message } = useSelector((state) => state.order);

  useEffect(() => {
    const calculatedTotal = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotal(calculatedTotal);

    if (isError) {
      toast.error(message);
    }

    if (!user) {
      navigate("/login");
      return;
    }
  }, [user, isError, isSuccess, message, navigate, dispatch, cartItems]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!address || !city) {
      return toast.error("Please fill out all fields");
    }

    const orderData = {
      user: user.id,
      products: cartItems.map((item) => ({
        item: item._id,
        quantity: item.quantity,
      })),
      paymentMethod,
      total,
      shippingInfo: { address, city },
    };

    dispatch(makeOrder(orderData));
    dispatch(reset());

    navigate("/");
    setAddress("");
    setCity("");
    setPaymentMethod("COD");
    setTotal(0);
    cartItems.forEach((item) => dispatch(removeItem(item._id)));
    toast.success("Order placed successfully!");
    dispatch(reset());
  };

  return (
    <div className="flex items-center justify-center w-full mx-auto p-3 bg-gray-100 overflow-auto">
      <div className="w-1/2 p-3 rounded-lg shadow-lg bg-gray-100">
        <h2 className="text-2xl font-semibold mb-6">Checkout</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="address"
              className="block text-gray-700 font-medium mb-2"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              className="w-full px-4 py-2 border rounded-lg"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="city"
              className="block text-gray-700 font-medium mb-2"
            >
              City
            </label>
            <input
              type="text"
              id="city"
              className="w-full px-4 py-2 border rounded-lg"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Payment Method
            </label>
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg"
            >
              <option value="COD">Cash on Delivery</option>
              <option value="Card">Card</option>
            </select>
          </div>

          <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between mb-2">
                <p>{item.name}</p>
                <p>
                  {item.quantity} x {item.price.toFixed(2)}Rs
                </p>
              </div>
            ))}
            <div className="flex justify-between font-bold text-lg">
              <p>Total:</p>
              <p>{total.toFixed(2)}Rs</p>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-green-600 text-gray-100 font-semibold rounded-lg"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
