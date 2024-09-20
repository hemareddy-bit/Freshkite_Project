import express from 'express';
import { loginUser } from "../controllers/userController"

const router = express.Router();

// Route to store user information
router.post('/login', loginUser);

export default router;