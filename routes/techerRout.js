import express from "express";
import { getTeacher, addTeacher } from "../controllers/TeacherController.js";

const router = express.Router();

router.get("/getTeachers", getTeacher);
router.post("/addTeacher", addTeacher);

export default router;
