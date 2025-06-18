const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

router.get("/", async (req, res) => {
  try {
    const { category, rating_gte, rating_lte, sortBy } = req.query;
    let query = {};

    if (category) query.category = category;
    if (rating_gte || rating_lte) query.rating = {};
    if (rating_gte) query.rating.$gte = parseFloat(rating_gte);
    if (rating_lte) query.rating.$lte = parseFloat(rating_lte);

    let products = await Product.find(query);
    if (sortBy) products.sort((a, b) => b[sortBy] - a[sortBy]);

    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    product ? res.json(product) : res.status(404).json({ message: "Product not found" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
