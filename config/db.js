import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables from the .env file
dotenv.config();

const databaseConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB");
    } catch (err) {
        console.error("Failed to connect to MongoDB", err);
    }
};

export default databaseConnection;

//here is the information you can add in the env file and check it.

// MONGO_URI = mongodb+srv://jenaamj:Ashrumochana@cluster0.3qfqm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
// PORT = 8088
// JWT_SECRET = Ashrumochana
//run programme "npm i THEN npm start"

