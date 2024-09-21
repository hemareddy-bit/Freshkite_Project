import { Request, Response } from "express";
import { Course } from "../models/course";

// Create a new course
export const createCourse = async (req: Request, res: Response) => {
  try {
    // Check if a course with the same title already exists
    const existingCourse = await Course.findOne({ title: req.body.title });

    if (existingCourse) {
      // If the course already exists, return a 400 Bad Request
      return res
        .status(400)
        .json({ message: "Course with this title already exists." });
    }

    // Create a new course if the title is unique
    const course = await Course.create(req.body);
    res.status(201).json(course);
  } catch (error: any) {
    // Handle any unexpected errors
    res.status(500).json({ message: error.message });
  }
};

// Get all courses
export const getCourses = async (req: Request, res: Response) => {
  try {
    const courses = await Course.find();
    res.status(200).json(courses);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Get a course by ID
export const getCourseById = async (req: Request, res: Response) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) return res.status(404).json({ message: "Course not found" });
    res.status(200).json(course);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Update a course by ID
export const updateCourse = async (req: Request, res: Response) => {
  try {
    const updatedCourse = await Course.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true, // Return the updated document
        runValidators: true, // Ensure validations are run
      }
    );
    if (!updatedCourse)
      return res.status(404).json({ message: "Course not found" });
    res.status(200).json(updatedCourse);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a course by ID
export const deleteCourse = async (req: Request, res: Response) => {
  try {
    const deletedCourse = await Course.findByIdAndDelete(req.params.id);
    if (!deletedCourse)
      return res.status(404).json({ message: "Course not found" });
    res.status(200).json({ message: "Course deleted" });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
