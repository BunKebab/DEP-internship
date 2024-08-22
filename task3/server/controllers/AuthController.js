const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/UserModel");

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};

const register = asyncHandler(async (req, res) => {
  const { email, name, password } = req.body;
  if (!email || !name || !password) {
    return res.status(400).json({ message: "please enter your credentials" });
  }

  const checkUser = await user.findOne({ email: email });
  if (checkUser) {
    return res
      .status(400)
      .json({ message: "email already registered, please use another" });
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(salt, password);

  const user = await User.create({
    email,
    name,
    password: hashedPassword,
  });

  return res.status(200).json({
    id: user._id,
    email: user.email,
    name: user.name,
    token: generateToken(user._id),
  });
});

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "please enter your credentials" });
  }

  const user = await User.findOne({ email: email });
  if (!user) {
    return res.status(400).json({ message: "the user does not exist" });
  }

  const checkPassword = await bcrypt.compare(password, user.password);
  if (!checkPassword) {
    return res.status(400).json({ message: "incorrect password" });
  }

  return res.status(200).json({
    id: user._id,
    name: user.name,
    email: user.email,
    token: generateToken(user._id),
  });
});

const updatePassword = asyncHandler(async (req, res) => {
  const { currentPassword, newPassword } = req.body;
  const userId = req.user.id;
  if (!currentPassword || !newPassword) {
    return res.status(400).json({ message: "please enter the credentials" });
  }

  const user = await User.findOne({ _id: userId });
  if (!user) {
    res.status(400).json({ message: "user not found" });
  }

  const checkPassword = bcrypt.compare(currentPassword, user.password);
  if (!checkPassword) {
    return res.status(400).json({ message: "incorrect current password" });
  }

  const salt = await bcrypt.genSalt(10);
  const hashedNewPassword = await bcrypt.hash(salt, newPassword);

  const updatedUser = await User.findByIdAndUpdate(userId, {
    password: hashedNewPassword,
  });

  return res.status(200).json(updatedUser);
});

const getUser = asyncHandler(async (req, res) => {
  const { _id, name, email } = await User.findById(req.user.id);
  if (!_id) {
    return res.status(404).json({ message: "user not found" });
  }

  return res.status(200).json({
    id: _id,
    name,
    email,
  });
});

module.exports = {
  register,
  login,
  updatePassword,
  getUser,
};
