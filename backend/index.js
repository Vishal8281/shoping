require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db.js");
const app = express();
const Product = require("./routes/product.js");

connectDB();
app.use(cors({ origin: true, credentials: true }));

app.use(express.json({ extended: false }));
app.get("/", (req, res) => res.send("Server up and running"));

app.use("/api/product", Product);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
