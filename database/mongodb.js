import mongoose from "mongoose";
import { DB_URI, NODE_ENV } from "../config/env.js";

if(!DB_URI){
    throw new Error("please define the MONGODB_URI (DB_URI) enviroment variable inside .env.<development/production>.local ")
}

// connect to Mongo DB

const connnectToDatabase = async () =>{
    try{
            await mongoose.connect(DB_URI)
            console.log(`Connected to db in ${NODE_ENV} mode`);
            
    }catch(error){
        console.log("Error connecting to DB", error);
        process.exit(1);
    }
}

export default connnectToDatabase;
