const mongoose = require('mongoose');

const ProductSchema= new mongoose.Schema({
  categorise:{

    type:"String",
    required:true,

    },
  image:{
    type:"String",
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


const userSchema= new mongoose.Schema({
  username:{

    type:"String",
    required:true,
  },

  email:{

    type:"String",
    required:true,
  },
  password:{

    type:"String",
    required:true,
  }
,

// confpassword:{

//   type:"String",
//   required:true,
// }



})


const Product =mongoose.model("Product",ProductSchema);
const User =mongoose.model('user',userSchema)

module.exports = {Product,User};