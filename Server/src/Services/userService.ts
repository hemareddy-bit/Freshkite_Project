import { User } from "../models/user";
import { verifyAuth } from "../utils/authUtils";

// Login or create a user and return a JWT token
export const loginOrCreateUser = async (idToken: string): Promise<string> => {
  // Verify the token with the authentication provider (e.g., Google)
  const userInfo = await verifyAuth(idToken);

  if (!userInfo) {
    throw new Error("Invalid ID token");
  }

  // Check if the user already exists
  let user = await User.findOne({ googleId: userInfo.sub });
  if (!user) {
    // Create a new user if they don't already exist
    user = await User.create({
      googleId: userInfo.sub,
      username: userInfo.name,
      profilePicture: userInfo.picture,
      email: userInfo.email,
    });
  }

  // Generate a JWT for the user
  return user.generateAuthToken();
};

// Retrieve user information by user ID
export const getUserById = async (userId: string) => {
  const user = await User.findById(userId);
  if (!user) {
    throw new Error("User not found");
  }
  return user;
};

// Update user details by user ID
export const updateUser = async (userId: string, updateData: any) => {
  const updatedUser = await User.findByIdAndUpdate(userId, updateData, {
    new: true,
    runValidators: true,
  });
  if (!updatedUser) {
    throw new Error("User not found");
  }
  return updatedUser;
};
