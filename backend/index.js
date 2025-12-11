const express = require("express");
require("dotenv").config();
const cors = require("cors");
const userRoutes = require("./routes/userroutes.js");
const productRoutes = require("./routes/productroutes.js")
const app = express();
const PORT = process.env.PORT || 5000;
const connectDB = require("./config/db.js");

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/users",userRoutes);
app.use("/api/products",productRoutes);
app.get("/",(req,res)=>{
    res.send("Api is running...");
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})