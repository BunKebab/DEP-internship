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
} = require("../middleware/AuthMiddleware");

router.get("/", protect, adminOnly, getAllOrders);
router.get("/user", protect, getUserOrders);
router.post("/new", protect, makeOrder);
router.put("/:id/status", protect, adminOnly, updateOrderStatus);
router.put("/:id/cancel", protect, adminOnly, cancelOrder);

module.exports = router;
