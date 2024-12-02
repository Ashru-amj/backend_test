import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import userRoutes from "./routes/userRoutes.js"
import databaseConnection from "./config/db.js";



dotenv.config();

const app = express();
databaseConnection();
//middleware 
app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/user",userRoutes);

app.listen(process.env.PORT,()=>{
    console.log(`server is running on port ${process.env.PORT}`);
})