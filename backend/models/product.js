const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  categorise: {
    type: "String",
    required: true,
  },
  number: {
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
  number: {
    type: "String",
    required: true,
  },
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
  categorise: {
    type: "String",
    required: true,
  },
  number: {
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
  count: {
    type: "String",
    required: true,
  },
  mnumber: {
    type: "String",
    required: true,
  },
  address: {
    type: "String",
    required: true,
  },
  note: {
    type: "String",
   
  },
});


const orderSchema = new mongoose.Schema({
  categorise: {
    type: "String",
    required: true,
  },
  number: {
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
  count: {
    type: "String",
    required: true,
  },
  mnumber: {
    type: "String",
    required: true,
  },
  address: {
    type: "String",
    required: true,
  },
  note: {
    type: "String",
   
  },
});


const CartSchema = new mongoose.Schema({
  categorise: {
    type: "String",
    required: true,
  },
  number: {
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
  usernumber: {
    type: "String",
    required: true,
  },

});




const Product = mongoose.model("Product", ProductSchema);
const User = mongoose.model("user", userSchema);
const Seller = mongoose.model("seller", sellerSchema);
const Order = mongoose.model("order", orderSchema);
const Cart = mongoose.model("cart", CartSchema);

module.exports = { Product, User, Seller ,Order,Cart};
