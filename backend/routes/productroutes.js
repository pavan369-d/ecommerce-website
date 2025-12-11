const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  getProductById,
  searchProducts
} = require("../controllers/productcontroller");


router.get("/search", searchProducts);

router.get("/", getAllProducts);
router.get("/:id", getProductById);

module.exports = router;
