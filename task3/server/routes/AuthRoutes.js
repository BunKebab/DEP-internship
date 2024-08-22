const express = require("express");
const router = express.Router();

const {
  register,
  login,
  updatePassword,
  getUser,
} = require("../controllers/AuthController");
const { protect } = require("../middleware/AuthMiddleware");

router.post("/register", register);
router.post("/login", login);
router.put("/:id/update-password", protect, updatePassword);
router.get("/user", protect, getUser);

module.exports = router;
