const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title:{type:String,required:true},
    description:{type:String,required:true},
    price:{type:Number,required:true},
    category:{type:String},
    image:{type:String},
    rating:{
        rate:Number,
        count:Number
    },
},{timestamps:true})

module.exports = mongoose.model("Product",productSchema)