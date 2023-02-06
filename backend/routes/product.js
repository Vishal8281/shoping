
const express =require("express");
const router =express.Router()

const {postCreateProduct, getAllProduct,findProduct,getProductbyCate}=require("../controllers/product.js")

router.post("/",postCreateProduct);
router.get("/",getAllProduct)
router.get('/:id',findProduct)
router.get('./:categories',getProductbyCate)

module.exports = router;
