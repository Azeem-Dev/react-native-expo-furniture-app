const { Product } = require("../../models");

const createProduct = async (req, res) => {
  const newProduct = new Product(req.body);

  try {
    await newProduct.save();
    res.status(200).json("product created successfully");
  } catch (error) {
    res.status(500).json("failed to create the product");
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json("failed to get the products");
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    res
      .status(500)
      .json("failed to get the product with id : " + req.params.id);
  }
};

const searhcProduct = async (req, res) => {
  let results = [];
  try {
    
    if (req.params.key == '-1') {
      results = await Product.find().sort({ createdAt: -1 });
    } else {
      results = await Product.aggregate([
        {
          $search: {
            index: "furniture_index",
            text: {
              query: req.params.key,
              path: {
                wildcard: "*",
              },
            },
          },
        },
      ]);
    }

    res.status(200).json(results);
  } catch (error) {
    res
      .status(500)
      .json("failed to search the products with key : " + req.params.key);
  }
};
const getNewArrivals = async (req, res) => {
  try {
    const today = new Date();
    const oneWeekAgo = new Date(today);
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

    const results = await Product.aggregate([
      {
        $match: {
          createdAt: { $gte: oneWeekAgo, $lte: today },
        },
      },
    ]);

    res.status(200).json(results);
  } catch (error) {
    res.status(500).json("Failed to fetch the products");
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  searhcProduct,
  getNewArrivals,
};
