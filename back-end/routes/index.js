const app = require("../middlewares");

const productRoutes = require("./product/productRoutes");

app.get("/api", (req, res) => res.send("Hello World!"));

app.use("/api/products", productRoutes);

module.exports = app;
