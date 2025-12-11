const User = require("../models/User.js");
const Product = require("../models/Product.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Create JWT Token
const createToken = (user_id) => {
  return jwt.sign({ user_id }, process.env.SECRET, { expiresIn: "7d" });
};

// SIGNUP
const signUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({ message: "User created successfully", user: newUser });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// LOGIN
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = createToken(user._id);

    res.status(200).json({ token, user });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// GET USER CART
const getUserProducts = async (req, res) => {
  try {
    const userId = req.params.id;

    const user = await User.findById(userId).populate("cart.product");
    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json({ cart: user.cart });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

const addUserProduct = async (req,res)=>{
    try{
        const userId = req.params.id;
        const {productId,quantity} = req.body;
        const user = await User.findById(userId);
        if (!user) return res.status(404).json({ message: "User not found" });
        const product = await Product.findById(productId);
        if(!product) return res.status(404).json({message:"Product not found"});
        const existingCartItem = user.cart.find((item)=>item.product.toString()===productId)
        if(existingCartItem){
            existingCartItem.quantity += quantity ||1;
        }else{
            user.cart.push({product:productId,quantity:quantity||1});
        }
        await user.save();
        res.status(200).json({message:"Product added to cart",cart:user.cart});
    }catch(err){
    res.status(500).json({ message: "Server error", error: err.message });

    }
}

 const getUserDetails = async (req, res) => {
  try {
    const userId = req.params.id;

    const user = await User.findById(userId).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      address: user.address,
    });
  } catch (error) {
    console.error("User Fetch Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { signUp, login, getUserProducts,addUserProduct,getUserDetails };


