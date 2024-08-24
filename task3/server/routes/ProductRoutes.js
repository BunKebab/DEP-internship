const express = require("express");
const router = express.Router();

const {
  getProducts,
  addProduct,
  deleteProduct,
} = require("../controllers/ProductController");
const { protect, adminOnly } = require("../middleware/AuthMiddleware");

router.get("/", getProducts);
router.post("/add", protect, adminOnly, addProduct);
router.delete("/:id/delete", protect, adminOnly, deleteProduct);

module.exports = router;
