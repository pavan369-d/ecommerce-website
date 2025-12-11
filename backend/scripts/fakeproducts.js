const connectDB = require("../config/db.js");
const Product = require("../models/Product.js");
const axios = require("axios");

const fakeStoreProducts = async()=>{
    try{
        await connectDB();
        const {data} = await axios.get("https://fakestoreapi.com/products");
        await Product.deleteMany();// to clear existing data
        await Product.insertMany(data);
        console.log("Fakestore products imported!");
        process.exit();
    }catch(err){
        console.error(err);
        process.exit(1);
    }
}

module.exports = fakeStoreProducts();