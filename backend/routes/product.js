const express = require("express");
const router = express.Router();

const {
  postCreateProduct,
  getAllProduct,
  findProduct ,
  getProductbyFood,
  getProductbyCloth,
  postUserSignup,
  postUserLogin ,
  getProductbyElectronics,
  // postSellerLogin,
  // postSellerSignup,
} = require("../controllers/product.js");


router.post("/", postCreateProduct);
router.get("/", getAllProduct);
router.get("/food", getProductbyFood);
router.get("/cloth", getProductbyCloth);
router.get("/electronics", getProductbyElectronics);
router.post("/signup", postUserSignup);
router.post("/login",  postUserLogin);
// router.post("/slogin",postSellerLogin)
// router.post("/ssignup",postSellerSignup)
router.get('/:id',findProduct)

module.exports = router;
