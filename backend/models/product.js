const mongoose = require('mongoose');

const ProductSchema= new mongoose.Schema({
    categorise:{
        type:"String",
        required:true,

    },
  image:{
    type:"Buffer",
    required:true,
  },
  name:{
    type:"String",
    required:true,
  },
  price:{

    type:"Number",
    required:true,
  },
  about:{
    type:"String",
    required:true,
  }
  
  
})


const Product =mongoose.model("Product",ProductSchema);

module.exports = Product;