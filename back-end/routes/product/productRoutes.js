const router = require("express").Router();

const { productsController } = require("../../controllers");

router.get("/", productsController.getAllProducts);
router.get("/new-arrivals",productsController.getNewArrivals)
router.get("/:id", productsController.getProductById);
router.get("/search/:key", productsController.searhcProduct);
router.post("/", productsController.createProduct);

module.exports = router;
