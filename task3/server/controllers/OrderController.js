const asyncHandler = require("express-async-handler");
const Order = require("../models/OrderModel");

const getOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find();
  if (!orders) {
    return res.status(400).json({ message: "orders not found" });
  }

  return res.status(200).json(orders);
});

const makeOrder = asyncHandler(async (req, res) => {
  const { userId, products, paymentMethod, total, shippingInfo } = req.body;
  if (!userId || !products || !paymentMethod || !total || !shippingInfo) {
    return res.status(404).json({ message: "missing required fields" });
  }

  const order = await Order.create({
    userId,
    products,
    paymentMethod,
    total,
    shippingInfo,
  });
  return res.status(200).json(order);
});

const updateOrderStatus = asyncHandler(async (req, res) => {
  const orderId = req.params._id;
  const order = await Order.findOne({ _id: orderId });
  if (!order) {
    return res.status(400).json({ message: "order not found" });
  }

  let updatedStatus;
  if (order.status === "pending") {
    updatedStatus = "in-shipment";
  } else if (order.status === "in-shipment") {
    updatedStatus = "received";
  }
  const updatedOrder = await Order.findByIdAndUpdate(
    { _id: orderId },
    { status: updatedStatus },
    { new: true }
  );
  return res.status(200).json(updatedOrder);
});

const cancelOrder = asyncHandler(async (req, res) => {
  const orderId = req.params._id;
  const order = await Order.findOne({ _id: orderId });
  if (!order) {
    return res.status(400).json({ message: "order not found" });
  }
  if (order.status === "received" || order.status === "in-shipment") {
    return res.status(400).json({ message: "order cannot be cancelled" });
  }

  const updatedOrder = await Order.findByIdAndUpdate(
    { _id: orderId },
    { status: "cancelled" },
    { new: true }
  );
  return res.status(200).json(updatedOrder);
});

module.exports = {
    getOrders,
    makeOrder,
    updateOrderStatus,
    cancelOrder,
};
