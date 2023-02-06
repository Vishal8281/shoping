const product =require("../models/product.js");


exports.postCreateProduct = (req, res) => {
    console.log("server create",req.body )
    product.create(req.body)
      .then((data) => res.json({ message: "added ", data }))
      .catch((err) => res.status(404).json({ error: err.message }));
  };

  exports.getAllProduct=(req,res)=>{
    product.find()
    .then((data)=>res.json({data}))
    .catch((err)=>res.status(404).json({error:err.message}))
  }

  exports.findProduct = (req, res) => {
    console.log("server update",req.body)
  
    product.findById( req.params.id)
      .then((data) => res.json({ message: "ok", data }))
      .catch((err) => res.status(404).json({ error: err.message }));
  };

  exports.getProductbyCate=(req,res)=>{
    console.log("get food")
    product.find({categorise:'food'})
    .then((data)=>res.json({data}))
    .catch((err)=>res.status(404).json({error:err.message}))
  }