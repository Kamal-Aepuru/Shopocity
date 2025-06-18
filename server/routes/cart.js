const express = require("express");
const router = express.Router();
const CartItem = require("../models/CartItem");

router.get("/", async (req, res) => {
  const cartItems = await CartItem.find().populate("productId");
  res.json(cartItems);
});

router.post("/", async (req, res) => {
  const { productId, quantity } = req.body;
  const newItem = new CartItem({ productId, quantity });
  await newItem.save();
  res.status(201).json(newItem);
});

router.put("/:productId", async (req, res) => {
  const { quantity } = req.body;
  const updated = await CartItem.findOneAndUpdate(
    { productId: req.params.productId },
    { quantity },
    { new: true }
  );
  res.json(updated);
});

router.delete("/:productId", async (req, res) => {
  await CartItem.findOneAndDelete({ productId: req.params.productId });
  res.json({ message: "Item removed from cart" });
});

module.exports = router;
