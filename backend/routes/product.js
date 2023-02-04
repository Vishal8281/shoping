
const express =require("express");
const router =express.Router()

const {postCreateProduct, getAllProduct,findProduct}=require("../controllers/product.js")

router.post("/",postCreateProduct);
router.get("/",getAllProduct)
router.get('/:id',findProduct)

module.exports = router;
