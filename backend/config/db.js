const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async()=>{
    try{
        const connect = await mongoose.connect(process.env.MONGODB_URL
        )
        console.log(`MongoDB Connected: ${connect.connection.host}`);
    }catch(err){
        console.error("Error connecting to MongoDB:",err.message)
    }
}

module.exports = connectDB;