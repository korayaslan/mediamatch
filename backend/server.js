import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import userRoute from "./routes/user.js"
 
const app = express()
dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to Database.")
    } catch (error) {
        console.log("Database Connection Error!");
    }
};

app.use("/api/user", userRoute);

app.listen(8800, () => {
    connect();
    console.log("Server is running!");
})

// DB
// emirasal - 8AmKtFIyjO2LhonW