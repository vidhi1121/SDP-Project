// const Product = require("../models/ProductModel");
// const asyncHandler = require("express-async-handler");

// const getProducts = asyncHandler(async (req, res) => {
//   const products = await Product.find({});
//   // throw new Error("Some Eror");
//   res.json(products);
// });

// const getProduct = asyncHandler(async (req, res) => {
//   const product = await Product.findById(req.params.id);
//   if (product) {
//     res.json(product);
//   } else {
//     res.status(404).json({ message: "Product Not Found" });
//   }
// });

// module.exports = { getProducts, getProduct };

const Product = require("../models/ProductModel");
const asyncHandler = require("express-async-handler");

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  // throw new Error("Some Eror");
  res.json(products);
});

const getProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product Not Found" });
  }
});

const addProduct = asyncHandler(async (req, res) => {
  //const product = await Product.findById(req.params.id);
  const { product } = req.body;
  try {
    //res.json(product);
    const newProduct = new Product({
      name: product.name,
      image: product.image,
      price: product.price,
      description: product.description,
      countInStock: product.countInStock,
      numReviews: product.numReviews,
      rating: product.rating,
    });
    await newProduct.save();
    res.status(201).send("New Veggie Added");
  } catch (error) {
    res.json({ message: error });
  }
});

const getProductById = asyncHandler(async (req, res) => {
  //const product = await Product.findById(req.params.id);
  const productId = req.body.productId;
  try {
    //res.json(product);

    const product = await Product.findOne({ _id: productId });
    res.send(product);
  } catch (error) {
    res.json({ message: error });
  }
});

const updateProductById = asyncHandler(async (req, res) => {
  const updatedproduct = req.body.updatedProduct;

  try {
    //res.json(product);

    const product = await Product.findOne({ _id: updatedproduct._id });
    (product.name = updatedproduct.name),
      (product.image = updatedproduct.image),
      (product.price = updatedproduct.price),
      (product.description = updatedproduct.description),
      (product.countinstock = updatedproduct.countInStock),
      (product.numReviews = updatedproduct.numReviews),
      (product.rating = updatedproduct.rating);

    await product.save();
    res.status(200).send(" Veggies Updated Success");
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

const deleteProduct = asyncHandler(async (req, res) => {
  //const product = await Product.findById(req.params.id);
  const productId = req.body.productId;
  try {
    //res.json(product);

    await Product.findOneAndDelete({ _id: productId });
    res.status(200).send("Veg Deleted");
  } catch (error) {
    res.status(404).json({ message: error });
  }
});

const createProductReview = asyncHandler(async (req, res) => {
  const { rating, comment } = req.body;

  const product = await Product.findById(req.params.id);

  if (product) {
    const alreadyReviewed = product.reviews.find(
      (r) => r.user.toString() === req.user._id.toString()
    );

    if (alreadyReviewed) {
      res.status(400);
      throw new Error("Product already reviewed");
    }

    const review = {
      name: req.user.name,
      rating: Number(rating),
      comment,
      user: req.user._id,
    };

    product.reviews.push(review);

    product.numReviews = product.reviews.length;

    product.rating =
      product.reviews.reduce((acc, item) => item.rating + acc, 0) /
      product.reviews.length;

    await product.save();
    res.status(201).json({ message: "Review added" });
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

module.exports = {
  getProducts,
  getProduct,
  addProduct,
  getProductById,
  updateProductById,
  deleteProduct,
  createProductReview,
};
