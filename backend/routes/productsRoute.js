// const express = require("express");
// // const Products = require('../models/ProductModel');
// // const asyncHandler = require('express-async-handler');
// // const Product = require("../models/ProductModel");
// const {
//   getProduct,
//   getProducts,
// } = require("../controllers/productsController");
// const router = express.Router();

// //GET ROUTE FOR ALL PRODUCTS

// router
//   .get(
//     "/products"
//     //     ,
//     //     asyncHandler (async (req,res) => {
//     //         const products = await Product.find({})
//     //     res.json(products);

//     // })
//   )
//   .get(getProducts);
// //GET ROUTE FOR SINGLE PRODUCT
// router
//   .get(
//     "/products/:id"
//     // ,  asyncHandler (async(req,res) => {
//     //     const product = await Products.findById(req.params.id);
//     //     if(product){
//     //         res.json(product);
//     //     } else {
//     //         res.status(404).json({message : "Product not found"});
//     //     }
//     // })
//   )
//   .get(getProduct);

// module.exports = router;
const express = require("express");
const {
  getProduct,
  getProducts,
  addProduct,
  getProductById,
  updateProductById,
  deleteProduct,
  createProductReview,
} = require("../controllers/productsController");
const { protect } = require("../middlewares/authMiddleware");
const router = express.Router();

//GET ROUTE FOR ALL PRODUCTS
router.route("/products").get(getProducts);

//GET ROUTE FOR SINGLE PRODUCT
router.route("/products/:id").get(getProduct);
router.route("/products/:id/reviews").post(protect, createProductReview);
router.route("/addproducts").post(addProduct);
router.route("/getproductsbyid").post(getProductById);
router.route("/updateproducts").post(updateProductById);
router.route("/deleteproducts").post(deleteProduct);

module.exports = router;
