const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  rating: { type: Number, default: 0 },
  price: { type: Number, required: true },
  description: { type: String },
  imageUrl: { type: String },
  brand: { type: String },
  inStock: { type: Boolean, default: true },
  features: [String],
  specifications: {
    weight: String,
    dimensions: String,
    color: String,
    warranty: String
  }
});

module.exports = mongoose.model("Product", productSchema);

