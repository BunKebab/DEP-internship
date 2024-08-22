const express = require("express");
const router = express.Router();

const {
  getOrders,
  makeOrder,
  updateOrderStatus,
  cancelOrder,
} = require("../controllers/OrderController");
const { protect } = require("../middleware/AuthMiddleware");

router.get("/orders", protect, getOrders);
router.post("/orders/new", protect, makeOrder);
router.put("/orders/:id/status", protect, updateOrderStatus);
router.put("/orders/:id/cancel", protect, cancelOrder);

module.exports = router;
