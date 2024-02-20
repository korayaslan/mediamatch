import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import userRoute from "./routes/user.js";
import authRoute from "./routes/auth.js";
import cors from "cors";
 
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

// Middlewares
app.use(cors({origin:"http://localhost:5173", credentials:true}));
app.use(express.json());
app.use(cookieParser());


app.use("/backend/auth", authRoute);
app.use("/backend/user", userRoute);


app.use((err, req, res, next) =>{
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Error";

    return res.status(errorStatus).send(errorMessage);
});


app.listen(8800, () => {
    connect();
    console.log("Server is running!");
});