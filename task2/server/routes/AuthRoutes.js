const express = require("express")
const router = express.Router()

const {
    register,
    login,
    updatePassword,
    getUser,
    updateName,
    updateUsername,
} = require("../controllers/AuthController")

const {
    protect
} = require("../middleware/AuthMiddleware")

router.post("/login", login)
router.post("/register", register)
router.get("/getUser", protect, getUser)
router.put("/update-password/:id", protect, updatePassword)
router.route("/update-username/:id", protect, updateUsername);
router.put("/update-name/:id", protect, updateName);

module.exports = router