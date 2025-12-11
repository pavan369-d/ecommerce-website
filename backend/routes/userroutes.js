const express = require("express");
const router = express.Router();

const {
  signUp,
  login,
  getUserProducts,
  addUserProduct,
  getUserDetails
} = require("../controllers/usercontroller")

router.post("/signup", signUp);
router.post("/login", login);
router.get("/:id/user",getUserDetails);
router.get("/:id/cart", getUserProducts); 
router.post("/:id/cart/add",addUserProduct);

module.exports = router;
