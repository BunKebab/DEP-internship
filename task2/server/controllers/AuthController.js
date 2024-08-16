const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/UserModel");

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};

const register = asyncHandler(async (req, res) => {
  const { email, username, name, password } = req.body;

  if (!email || !username || !name || !password) {
    return res.status(400).json({ message: "Please enter all credentials" });
  }

  const checkEmail = await User.findOne({ email });
  if (checkEmail) {
    return res.status(400).json({ message: "Email already registered" });
  }

  const checkUsername = await User.findOne({ username });
  if (checkUsername) {
    return res.status(400).json({ message: "Username already exists" });
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({
    email,
    username,
    name,
    password: hashedPassword,
  });

  return res.status(201).json({
    id: user._id,
    email: user.email,
    username: user.username,
    token: generateToken(user._id),
  });
});

const login = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "Please enter all credentials" });
  }

  const user = await User.findOne({ username });
  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: "Incorrect password" });
  }

  res.status(200).json({
    id: user._id,
    name: user.name,
    username: user.username,
    token: generateToken(user._id),
  });
});

const updatePassword = asyncHandler(async (req, res) => {
  const { currentPassword, newPassword } = req.body;

  const user = await User.findById(req.params.id);

  if (!user) {
    return res.status(400).json({ message: "user not found" });
  }

  const isMatch = await bcrypt.compare(currentPassword, password);

  if (!isMatch) {
    return res.status(400).json({ message: "incorrect current pasword" });
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(newPassword, salt);

  const updatedUser = await User.findByIdAndUpdate(req.params.id, {
    password: hashedPassword,
  });

  res.status(200).json(updatedUser);
});

const updateUsername = asyncHandler(async (req, res) => {
  const { newUsername } = req.body;
  if (!newUsername) {
    return res.status(400).json({ message: "please enter a username" });
  }

  const checkUsername = await User.findOne({ username: newUsername });
  if (checkUsername) {
    return res.status(400).json({ Message: "username already in use" });
  }

  const updatedUser = await User.findByIdAndUpdate(req.params.id, {
    username: newUsername,
  });
  res.status(200).json(updatedUser);
});

const updateName = asyncHandler(async (req, res) => {
  const { newName } = req.body;
  if (!newName) {
    return res.status(400).json({ message: "please enter a name" });
  }

  const updatedUser = await User.findByIdAndUpdate(req.params.id, {
    name: newName,
  });
  res.status(200).json(updatedUser);
});

const getUser = asyncHandler(async (req, res) => {
  const { _id, name, email, role } = await User.findById(req.user.id);

  if (!_id) {
    return res.status(404).json({ message: "User not found" });
  }

  res.status(200).json({
    id: _id,
    name,
    username,
  });
});

module.exports = {
  register,
  login,
  updatePassword,
  getUser,
  updateUsername,
  updateName,
};
