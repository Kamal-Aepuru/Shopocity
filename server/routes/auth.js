const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const newUser = new User({ username, password });
  await newUser.save();
  res.status(201).json({ message: "User registered" });
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username, password });
  user
    ? res.json({ message: "Login successful", username })
    : res.status(401).json({ message: "Invalid credentials" });
});

router.get("/profile", async (req, res) => {
  const { username } = req.query;
  const user = await User.findOne({ username });
  user
    ? res.json(user)
    : res.status(401).json({ message: "User not found" });
});

module.exports = router;
