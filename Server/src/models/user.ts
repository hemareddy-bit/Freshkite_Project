import mongoose, { Document, Schema } from "mongoose";
import jwt from "jsonwebtoken";
import { config } from "../config/config";
require("dotenv").config();

interface IUser extends Document {
  googleId: string;
  username: string;
  email: string;
  profilePicture: string;
  generateAuthToken: () => string;
}

const userSchema: Schema = new Schema<IUser>({
  googleId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true },
  profilePicture: { type: String },
});

userSchema.methods.generateAuthToken = function (): string {
  const user = this;

  // Generate the JWT token with user info (googleId and email)
  const token = jwt.sign(
    {
      _id: user._id,
      googleId: user.googleId,
      email: user.email,
    },
    config.jwtSecret!,
    {
      expiresIn: "15d",
    }
  );

  return token;
};

export const User = mongoose.model<IUser>("User", userSchema);