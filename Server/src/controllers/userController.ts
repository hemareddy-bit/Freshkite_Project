import { Request, Response } from "express";
import * as userService from "../Services/userService";

// Login or create a user and return a JWT token
export const loginUser = async (req: Request, res: Response) => {
  const { idToken } = req.body;

  try {
    const token = await userService.loginOrCreateUser(idToken);
    res.status(200).json({ token });
  } catch (error: any) {
    if (error.message === "Invalid ID token") {
      res.status(401).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Server error" }); 
    }
  }
};

// Get user information by user ID
export const getUserById = async (req: Request, res: Response) => {
  try {
    const user = await userService.getUserById(req.params.id);
    res.status(200).json(user);
  } catch (error: any) {
    if (error.message === "User not found") {
      res.status(404).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Server error" });
    }
  }
};

// Update user details by user ID
export const updateUser = async (req: Request, res: Response) => {
  try {
    const updatedUser = await userService.updateUser(req.params.id, req.body);
    res.status(200).json(updatedUser);
  } catch (error: any) {
    if (error.message === "User not found") {
      res.status(404).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Server error" });
    }
  }
};
