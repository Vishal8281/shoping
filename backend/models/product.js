const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  categorise: {
    type: "String",
    required: true,
  },
  sellerid: {
    type: "String",
    required: true,
  },
  image: {
    type: "String",
    required: true,
  },
  name: {
    type: "String",
    required: true,
  },
  price: {
    type: "Number",
    required: true,
  },
  about: {
    type: "String",
    required: true,
  },
});

const userSchema = new mongoose.Schema({
  username: {
    type: "String",
    required: true,
  },

  email: {
    type: "String",
    required: true,
  },
  password: {
    type: "String",
    required: true,
  },
});

const sellerSchema = new mongoose.Schema({
  name: {
    type: "String",
    required: true,
  },

  semail: {
    type: "String",
    required: true,
  },
  spassword: {
    type: "String",
    required: true,
  },
  sconfpassword: {
    type: "String",
    required: true,
  },
  company: {
    type: "String",
    required: true,
  },
  number: {
    type: "number",
    required: true,
  },
});

const Product = mongoose.model("Product", ProductSchema);
const User = mongoose.model("user", userSchema);
const Seller = mongoose.model("seller", sellerSchema);

module.exports = { Product, User, Seller };
