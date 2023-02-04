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
  
    Todo.find( req.params.id,req.body)
      .then((data) => res.json({ message: "updated", data }))
      .catch((err) => res.status(404).json({ error: err.message }));
  };