const mongoose = require("mongoose");
const dotenv = require("dotenv");

const Product = require("./models/Product");
const Category = require("./models/Category");
const User = require("./models/User");

dotenv.config();

mongoose.connect(process.env.MONGODB_URI).then(async () => {
  console.log("Connected to MongoDB. Seeding...");

  await Product.deleteMany({});
  await Category.deleteMany({});
  await User.deleteMany({});

  await Category.insertMany([
    { name: "Books" },
    { name: "Clothing" },
    { name: "Electronics" },
    { name: "Furniture" },
    { name: "Accessories" }
  ]);

  await Product.insertMany([
    {
      name: "The Alchemist",
      category: "Books",
      rating: 4.7,
      price: 299,
      description: "A novel by Paulo Coelho about following your dreams.",
      imageUrl: "https://example.com/book.jpg",
      brand: "HarperOne",
      inStock: true,
      features: ["Paperback", "200 pages", "Inspirational story"],
      specifications: {
        weight: "250g",
        dimensions: "20 x 13 x 2 cm",
        color: "N/A",
        warranty: "No warranty"
      }
    },
    {
      name: "Bluetooth Speaker",
      category: "Electronics",
      rating: 4.5,
      price: 1599,
      description: "Portable Bluetooth speaker with 10 hours of battery life.",
      imageUrl: "https://example.com/speaker.jpg",
      brand: "Boat",
      inStock: true,
      features: ["Waterproof", "10hr Battery", "Bluetooth 5.0"],
      specifications: {
        weight: "450g",
        dimensions: "7 x 7 x 8 cm",
        color: "Black",
        warranty: "1 year"
      }
    },
    {
      name: "Denim Jacket",
      category: "Clothing",
      rating: 4.1,
      price: 999,
      description: "Stylish unisex denim jacket.",
      imageUrl: "https://example.com/jacket.jpg",
      brand: "Levi's",
      inStock: true,
      features: ["Denim", "Machine washable", "Unisex"],
      specifications: {
        weight: "600g",
        dimensions: "Folded",
        color: "Blue",
        warranty: "6 months"
      }
    },
    {
      name: "Office Chair",
      category: "Furniture",
      rating: 4.0,
      price: 3199,
      description: "Ergonomic office chair with adjustable height.",
      imageUrl: "https://example.com/chair.jpg",
      brand: "Wakefit",
      inStock: true,
      features: ["Ergonomic", "Height adjustable", "Cushioned"],
      specifications: {
        weight: "9kg",
        dimensions: "60 x 60 x 120 cm",
        color: "Black",
        warranty: "1 year"
      }
    },
    {
      name: "Leather Wallet",
      category: "Accessories",
      rating: 4.3,
      price: 499,
      description: "Genuine leather wallet with multiple compartments.",
      imageUrl: "https://example.com/wallet.jpg",
      brand: "WildHorn",
      inStock: true,
      features: ["Leather", "Slim design", "RFID Protection"],
      specifications: {
        weight: "150g",
        dimensions: "12 x 10 x 2 cm",
        color: "Brown",
        warranty: "1 year"
      }
    },
    {
      name: "Smartphone X1",
      category: "Electronics",
      rating: 4.5,
      price: 20999,
      description: "A powerful smartphone in the X-series with modern features.",
      imageUrl: "https://example.com/phone-1.jpg",
      brand: "BrandX",
      inStock: true,
      features: ["5G", "AMOLED", "5000mAh Battery"],
      specifications: {
        weight: "180g",
        dimensions: "15 x 7 x 0.8 cm",
        color: "Silver",
        warranty: "1 year"
      }
    },    {
      name: "Smartphone X2",
      category: "Electronics",
      rating: 4.5,
      price: 21999,
      description: "A powerful smartphone in the X-series with modern features.",
      imageUrl: "https://example.com/phone-2.jpg",
      brand: "BrandX",
      inStock: true,
      features: ["5G", "AMOLED", "5000mAh Battery"],
      specifications: {
        weight: "180g",
        dimensions: "15 x 7 x 0.8 cm",
        color: "Silver",
        warranty: "1 year"
      }
    },    {
      name: "Smartphone X3",
      category: "Electronics",
      rating: 4.5,
      price: 22999,
      description: "A powerful smartphone in the X-series with modern features.",
      imageUrl: "https://example.com/phone-3.jpg",
      brand: "BrandX",
      inStock: true,
      features: ["5G", "AMOLED", "5000mAh Battery"],
      specifications: {
        weight: "180g",
        dimensions: "15 x 7 x 0.8 cm",
        color: "Silver",
        warranty: "1 year"
      }
    },    {
      name: "Smartphone X4",
      category: "Electronics",
      rating: 4.5,
      price: 23999,
      description: "A powerful smartphone in the X-series with modern features.",
      imageUrl: "https://example.com/phone-4.jpg",
      brand: "BrandX",
      inStock: true,
      features: ["5G", "AMOLED", "5000mAh Battery"],
      specifications: {
        weight: "180g",
        dimensions: "15 x 7 x 0.8 cm",
        color: "Silver",
        warranty: "1 year"
      }
    },    {
      name: "Smartphone X5",
      category: "Electronics",
      rating: 4.5,
      price: 24999,
      description: "A powerful smartphone in the X-series with modern features.",
      imageUrl: "https://example.com/phone-5.jpg",
      brand: "BrandX",
      inStock: true,
      features: ["5G", "AMOLED", "5000mAh Battery"],
      specifications: {
        weight: "180g",
        dimensions: "15 x 7 x 0.8 cm",
        color: "Silver",
        warranty: "1 year"
      }
    },    {
      name: "Smartphone X6",
      category: "Electronics",
      rating: 4.5,
      price: 25999,
      description: "A powerful smartphone in the X-series with modern features.",
      imageUrl: "https://example.com/phone-6.jpg",
      brand: "BrandX",
      inStock: true,
      features: ["5G", "AMOLED", "5000mAh Battery"],
      specifications: {
        weight: "180g",
        dimensions: "15 x 7 x 0.8 cm",
        color: "Silver",
        warranty: "1 year"
      }
    },    {
      name: "Smartphone X7",
      category: "Electronics",
      rating: 4.5,
      price: 26999,
      description: "A powerful smartphone in the X-series with modern features.",
      imageUrl: "https://example.com/phone-7.jpg",
      brand: "BrandX",
      inStock: true,
      features: ["5G", "AMOLED", "5000mAh Battery"],
      specifications: {
        weight: "180g",
        dimensions: "15 x 7 x 0.8 cm",
        color: "Silver",
        warranty: "1 year"
      }
    },    {
      name: "Smartphone X8",
      category: "Electronics",
      rating: 4.5,
      price: 27999,
      description: "A powerful smartphone in the X-series with modern features.",
      imageUrl: "https://example.com/phone-8.jpg",
      brand: "BrandX",
      inStock: true,
      features: ["5G", "AMOLED", "5000mAh Battery"],
      specifications: {
        weight: "180g",
        dimensions: "15 x 7 x 0.8 cm",
        color: "Silver",
        warranty: "1 year"
      }
    },    {
      name: "Smartphone X9",
      category: "Electronics",
      rating: 4.5,
      price: 28999,
      description: "A powerful smartphone in the X-series with modern features.",
      imageUrl: "https://example.com/phone-9.jpg",
      brand: "BrandX",
      inStock: true,
      features: ["5G", "AMOLED", "5000mAh Battery"],
      specifications: {
        weight: "180g",
        dimensions: "15 x 7 x 0.8 cm",
        color: "Silver",
        warranty: "1 year"
      }
    },    {
      name: "Smartphone X10",
      category: "Electronics",
      rating: 4.5,
      price: 29999,
      description: "A powerful smartphone in the X-series with modern features.",
      imageUrl: "https://example.com/phone-10.jpg",
      brand: "BrandX",
      inStock: true,
      features: ["5G", "AMOLED", "5000mAh Battery"],
      specifications: {
        weight: "180g",
        dimensions: "15 x 7 x 0.8 cm",
        color: "Silver",
        warranty: "1 year"
      }
    },    {
      name: "Smartphone X11",
      category: "Electronics",
      rating: 4.5,
      price: 30999,
      description: "A powerful smartphone in the X-series with modern features.",
      imageUrl: "https://example.com/phone-11.jpg",
      brand: "BrandX",
      inStock: true,
      features: ["5G", "AMOLED", "5000mAh Battery"],
      specifications: {
        weight: "180g",
        dimensions: "15 x 7 x 0.8 cm",
        color: "Silver",
        warranty: "1 year"
      }
    },    {
      name: "Smartphone X12",
      category: "Electronics",
      rating: 4.5,
      price: 31999,
      description: "A powerful smartphone in the X-series with modern features.",
      imageUrl: "https://example.com/phone-12.jpg",
      brand: "BrandX",
      inStock: true,
      features: ["5G", "AMOLED", "5000mAh Battery"],
      specifications: {
        weight: "180g",
        dimensions: "15 x 7 x 0.8 cm",
        color: "Silver",
        warranty: "1 year"
      }
    },    {
      name: "Smartphone X13",
      category: "Electronics",
      rating: 4.5,
      price: 32999,
      description: "A powerful smartphone in the X-series with modern features.",
      imageUrl: "https://example.com/phone-13.jpg",
      brand: "BrandX",
      inStock: true,
      features: ["5G", "AMOLED", "5000mAh Battery"],
      specifications: {
        weight: "180g",
        dimensions: "15 x 7 x 0.8 cm",
        color: "Silver",
        warranty: "1 year"
      }
    },    {
      name: "Smartphone X14",
      category: "Electronics",
      rating: 4.5,
      price: 33999,
      description: "A powerful smartphone in the X-series with modern features.",
      imageUrl: "https://example.com/phone-14.jpg",
      brand: "BrandX",
      inStock: true,
      features: ["5G", "AMOLED", "5000mAh Battery"],
      specifications: {
        weight: "180g",
        dimensions: "15 x 7 x 0.8 cm",
        color: "Silver",
        warranty: "1 year"
      }
    },    {
      name: "Smartphone X15",
      category: "Electronics",
      rating: 4.5,
      price: 34999,
      description: "A powerful smartphone in the X-series with modern features.",
      imageUrl: "https://example.com/phone-15.jpg",
      brand: "BrandX",
      inStock: true,
      features: ["5G", "AMOLED", "5000mAh Battery"],
      specifications: {
        weight: "180g",
        dimensions: "15 x 7 x 0.8 cm",
        color: "Silver",
        warranty: "1 year"
      }
    },    {
      name: "Smartphone X16",
      category: "Electronics",
      rating: 4.5,
      price: 35999,
      description: "A powerful smartphone in the X-series with modern features.",
      imageUrl: "https://example.com/phone-16.jpg",
      brand: "BrandX",
      inStock: true,
      features: ["5G", "AMOLED", "5000mAh Battery"],
      specifications: {
        weight: "180g",
        dimensions: "15 x 7 x 0.8 cm",
        color: "Silver",
        warranty: "1 year"
      }
    },    {
      name: "Smartphone X17",
      category: "Electronics",
      rating: 4.5,
      price: 36999,
      description: "A powerful smartphone in the X-series with modern features.",
      imageUrl: "https://example.com/phone-17.jpg",
      brand: "BrandX",
      inStock: true,
      features: ["5G", "AMOLED", "5000mAh Battery"],
      specifications: {
        weight: "180g",
        dimensions: "15 x 7 x 0.8 cm",
        color: "Silver",
        warranty: "1 year"
      }
    },    {
      name: "Smartphone X18",
      category: "Electronics",
      rating: 4.5,
      price: 37999,
      description: "A powerful smartphone in the X-series with modern features.",
      imageUrl: "https://example.com/phone-18.jpg",
      brand: "BrandX",
      inStock: true,
      features: ["5G", "AMOLED", "5000mAh Battery"],
      specifications: {
        weight: "180g",
        dimensions: "15 x 7 x 0.8 cm",
        color: "Silver",
        warranty: "1 year"
      }
    },    {
      name: "Smartphone X19",
      category: "Electronics",
      rating: 4.5,
      price: 38999,
      description: "A powerful smartphone in the X-series with modern features.",
      imageUrl: "https://example.com/phone-19.jpg",
      brand: "BrandX",
      inStock: true,
      features: ["5G", "AMOLED", "5000mAh Battery"],
      specifications: {
        weight: "180g",
        dimensions: "15 x 7 x 0.8 cm",
        color: "Silver",
        warranty: "1 year"
      }
    },    {
      name: "Smartphone X20",
      category: "Electronics",
      rating: 4.5,
      price: 39999,
      description: "A powerful smartphone in the X-series with modern features.",
      imageUrl: "https://example.com/phone-20.jpg",
      brand: "BrandX",
      inStock: true,
      features: ["5G", "AMOLED", "5000mAh Battery"],
      specifications: {
        weight: "180g",
        dimensions: "15 x 7 x 0.8 cm",
        color: "Silver",
        warranty: "1 year"
      }
    },
  ]);

  await User.create({ username: "testuser", password: "123456" });

  console.log("✅ Database seeded successfully.");
  mongoose.disconnect();
}).catch(err => {
  console.error("MongoDB connection error:", err);
});
