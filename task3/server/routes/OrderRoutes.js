const express = require("express");
const router = express.Router();

const {
  getAllOrders,
  getUserOrders,
  makeOrder,
  updateOrderStatus,
  cancelOrder,
} = require("../controllers/OrderController");
const {
  protect,
  adminOnly,
  customerOnly,
} = require("../middleware/AuthMiddleware");

router.get("/orders", protect, adminOnly, getAllOrders);
router.get("/orders/user", protect, customerOnly, getUserOrders);
router.post("/orders/new", protect, customerOnly, makeOrder);
router.put("/orders/:id/status", protect, adminOnly, updateOrderStatus);
router.put("/orders/:id/cancel", protect, adminOnly, cancelOrder);

module.exports = router;
