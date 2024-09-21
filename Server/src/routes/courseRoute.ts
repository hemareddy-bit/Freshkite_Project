import { Router } from "express";
import {
  createCourse,
  getCourses,
  getCourseById,
  updateCourse,
  deleteCourse,
} from "../controllers/courseController";
import { verifyToken } from "../middleware/verifyUser";

const router = Router(); 

// Create a new course 
router.post("/create",createCourse);

// Get all courses
router.get("/courses", getCourses);
 
// Get a single course by ID
router.get("/:id", getCourseById);

// Update a course by ID
router.put("/:id", updateCourse);

// Delete a course by ID
router.delete("/:id", deleteCourse);

export default router;
