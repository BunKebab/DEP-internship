import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders, updateOrderStatus } from "../actions/orderSlice";
import { toast } from "react-toastify";

import Sidebar from "../components/Sidebar";
import OrderDetails from "../components/OrderDetails";

const AdminOrders = () => {
  const dispatch = useDispatch();
  const { orders, isLoading, isError, message } = useSelector(
    (state) => state.order
  );

  const reversedOrders = [...orders].reverse();

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
  }, [isError, message]);

  useEffect(() => {
    dispatch(getAllOrders());
  }, [dispatch]);

  const handleUpdateStatus = (orderId) => {
    dispatch(updateOrderStatus(orderId));
  };

  return (
    <div className="flex items-start justify-start gap-3 w-full h-full bg-gray-100 text-green-600 overflow-auto">
      <Sidebar />
      <div className="flex flex-col w-full h-full items-start justify-start gap-3 p-3">
        <h1 className="text-2xl font-bold">Orders</h1>
        <table className="min-w-full bg-gray-100 text-center rounded-lg shadow-md">
          <thead>
            <tr>
              <th className="p-3 border-b">Date</th>
              <th className="p-3 border-b">Customer</th>
              <th className="p-3 border-b">Total</th>
              <th className="p-3 border-b">Shipping Information</th>
              <th className="p-3 border-b">Status</th>
              <th className="p-3 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {reversedOrders.map((order) => (
              <tr key={order._id}>
                <td className="p-3 border-b text-center">
                  {new Date(order.updatedAt).toLocaleDateString()}
                </td>
                <td className="p-3 border-b text-center">{order.user.name}</td>
                <td className="p-3 border-b text-center">{order.total}Rs</td>
                <td className="p-3 border-b text-center">
                  {order.shippingInfo.address}
                  <br />
                  {order.shippingInfo.city}
                </td>
                <td className="p-3 border-b text-center">{order.status}</td>
                <td className="p-3 flex flex-col items-center justify-center text-center gap-3">
                  {order.status === "received" ||
                  order.status === "cancelled" ? (
                    <>
                      <p>No actions available</p>
                      <OrderDetails order={order} />
                    </>
                  ) : (
                    <>
                      <button
                        className="text-gray-100 bg-blue-600 rounded-lg p-3 w-full hover:underline"
                        onClick={() => handleUpdateStatus(order._id)}
                      >
                        Update Status
                      </button>
                      <OrderDetails order={order} />
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminOrders;
