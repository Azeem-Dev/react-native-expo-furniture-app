const express = require("express");

const productRoutes = require("./product/productRoutes");

const app = express();

app.get("/", (req, res) => res.send("Hello World!"));

app.use("/api/products", productRoutes);

module.exports = app;
