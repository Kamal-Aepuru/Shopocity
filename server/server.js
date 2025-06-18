const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./db");
require("dotenv").config();

const app = express();
connectDB();

app.use(cors());
app.use(bodyParser.json());

app.use("/api/products", require("./routes/products"));
app.use("/api/categories", require("./routes/categories"));
app.use("/api/cart", require("./routes/cart"));
app.use("/api/wishlist", require("./routes/wishlist"));
app.use("/api/auth", require("./routes/auth"));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
