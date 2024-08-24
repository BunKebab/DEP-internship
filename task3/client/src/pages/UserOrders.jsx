import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserOrders, cancelOrder, reset } from "../actions/orderSlice";
import { toast } from "react-toastify";

import OrderDetails from "../components/OrderDetails";

const UserOrders = () => {
  const dispatch = useDispatch();
  const { orders, isError, message } = useSelector((state) => state.order);

  const reversedOrders = [...orders].reverse();

  useEffect(() => {
    dispatch(getUserOrders());
  }, []);

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
  }, [isError, message]);

  const handleCancelOrder = (orderId) => {
    dispatch(cancelOrder(orderId));
  };

  return (
    <div className="w-full h-full text-center p-3 bg-gray-100 text-green-600">
      <h1 className="text-2xl font-bold mb-3">Your Orders</h1>
      {orders.length === 0 ? (
        <p>You have no orders yet.</p>
      ) : (
        <table className="min-w-full bg-gray-100 rounded-lg shadow-lg">
          <thead>
            <tr>
              <th className="p-3 border-b">Total</th>
              <th className="p-3 border-b">Status</th>
              <th className="p-3 border-b">Date</th>
            </tr>
          </thead>
          <tbody>
            {reversedOrders.map((order) => (
              <tr key={order._id}>
                <td className="p-3 border-b text-center">{order.total}Rs</td>
                <td className="p-3 border-b text-center">{order.status}</td>
                <td className="p-3 border-b text-center">
                  {new Date(order.createdAt).toLocaleDateString()}
                </td>
                <td className="p-3 flex flex-col items-center justify-center text-center gap-3">
                  {order.status === "canceled" ||
                  order.status === "received" ? (
                    <>
                      <p>Order cannot be cancelled</p>
                      <OrderDetails order={order} />
                    </>
                  ) : (
                    <>
                      <button
                        className="bg-red-600 text-gray-100 w-full rounded-lg p-2"
                        onClick={() => handleCancelOrder(order._id)}
                      >
                        Cancel Order
                      </button>
                      <OrderDetails order={order} />
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserOrders;
