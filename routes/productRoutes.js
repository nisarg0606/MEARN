const express = require("express");
const router = express.Router();
const productController = require("../controllers/productContoller");

// Create a new product
router.post("/", productController.createProduct);

// Get all products
router.get("/", productController.getAllProducts);

// Get a specific product
router.get("/:id", productController.getProductById);

// Update a product
router.put("/:id", productController.updateProduct);

// Delete a product
router.delete("/:id", productController.deleteProduct);

module.exports = router;