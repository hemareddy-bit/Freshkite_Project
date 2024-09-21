import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import userRoute from "./routes/userRoute";
import courseRoute from "./routes/courseRoute";
import { verifyToken } from "./middleware/verifyUser";

dotenv.config();

export const app = express();

// Middleware setup
app.use(cors()); 
app.use(bodyParser.json());  
app.use("/user",userRoute); 
app.use("/course",verifyToken,courseRoute);



