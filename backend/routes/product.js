const express = require("express");
const router = express.Router();

const {
  postCreateProduct,
  getAllProduct,
  getProductbyBook,
  getProductbyFootwear,
  getProductbyStationery,
  getProductbyFood,
  getProductbyCloth,
  postUserSignup,
  postUserLogin ,
  getProductbyElectronics,
  postUserBuy,
  getOrder,
  postAcceptOrder,
  deleteOrder,
  getUserOrder,
  postCreateCart,
  getUserCart,
  deleteCart,
} = require("../controllers/product.js");


router.post("/", postCreateProduct);
router.get("/", getAllProduct);
router.get("/food", getProductbyFood);
router.get("/cloth", getProductbyCloth);
router.get("/electronics", getProductbyElectronics);
router.get("/book",  getProductbyBook);
router.get("/footwear",  getProductbyFootwear);
router.get("/stationery",  getProductbyStationery);
router.post("/signup", postUserSignup);
router.post("/login",  postUserLogin);
router.post("/buy",postUserBuy)
router.post("/accept",postAcceptOrder)
router.post("/cart",postCreateCart)
router.get("/user/:usernumber",getUserCart)
router.get("/:mnumber",getUserOrder)
router.delete('/:id',deleteOrder)
router.delete('/user/:Did',deleteCart)
router.get('/:number',getOrder)





// router.post("/ssignup",postSellerSignup)



module.exports = router;
