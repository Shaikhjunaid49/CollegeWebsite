import express from "express";
import { addCourses, getCourse } from "../controllers/courseController.js";
import { protection } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/addcourses", addCourses);
router.get("/getCourses", getCourse);

export default router;
