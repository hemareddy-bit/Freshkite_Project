import { Request, Response } from "express";
import { User } from "../models/user";
import { verifyToken } from "../utils/authUtils";
require("dotenv").config();

// Store user info in MongoDB
export const loginUser = async (req: Request, res: Response) => {
  const { idToken } = req.body;

  // Verify the token first
  const userInfo = await verifyToken(idToken);

  if (!userInfo) {
    return res.status(401).json({ message: "Invalid ID token" });
  }

  try {
    // Check if the user already exists in the database
    let user = await User.findOne({ googleId: userInfo.sub });
    if (!user) {
      // Create a new user if it doesn't exist
      const user = await User.create({
        googleId: userInfo.sub,
        username: userInfo.name,
        profilePicture: userInfo.picture,
        email: userInfo.email,
      });
      // Generate a token for the user
      const token = user.generateAuthToken();

      return res.status(201).json({ message: "User stored successfully!" ,Token:token});
    }

    return res.status(200).json({ message: "User already exists!" });
  } catch (error) {
    console.error("Error storing user:", error);
    return res.status(500).json({ message: "Server error" });
  }
};
