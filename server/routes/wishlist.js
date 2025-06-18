const express = require("express");
const router = express.Router();
const WishlistItem = require("../models/WishlistItem");

router.get("/", async (req, res) => {
  const items = await WishlistItem.find().populate("productId");
  res.json(items);
});

router.post("/", async (req, res) => {
  const { productId } = req.body;
  const newItem = new WishlistItem({ productId });
  await newItem.save();
  res.status(201).json(newItem);
});

router.delete("/:productId", async (req, res) => {
  await WishlistItem.findOneAndDelete({ productId: req.params.productId });
  res.json({ message: "Item removed from wishlist" });
});

module.exports = router;
