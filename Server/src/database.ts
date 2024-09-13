require("dotenv").config();
import mongoose from "mongoose";
import { config } from "./config/config";

export const dbConnection = async()=>{
    try{
        await mongoose.connect(config.dbUrl).then((data:any)=>{
            console.log('Connected to the database successfully.');
        })
    }catch(error:any){
        console.error('Error connecting to the database:', error);
        setTimeout(dbConnection,5000);
    }
    
} 

