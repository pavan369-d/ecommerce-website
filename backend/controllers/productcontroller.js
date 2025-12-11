const Product = require("../models/Product.js");

const getAllProducts = async(req,res)=>{
    try{
        const products = await Product.find({});
        res.status(200).json({products});
    }catch(err){
        res.status(500).json({message:"Server error"});
    }
}

const getProductById = async(req,res)=>{
    try{
        const {id} = req.params;
        const product = await Product.findById(id);
        if(!product){
            res.status(404).json({message:"Product not found"});
        }
        res.status(200).json({product});
    }catch(err){
        res.status(500).json({message:"Server error"});
    }
}

const searchProducts = async(req,res)=>{
      try {
    const query = req.query.query;

    if (!query || query.trim() === "") {
      return res.json([]); // empty search → return empty
    }

    const products = await Product.find({
      title: { $regex: query, $options: "i" }
    });

    res.json(products);

  } catch (error) {
    console.error("Search Error:", error);
    res.status(500).json({ message: "Search failed" });
  }
}

module.exports = {getAllProducts,getProductById,searchProducts};