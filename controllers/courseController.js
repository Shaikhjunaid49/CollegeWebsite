import Course from "../models/Course.js";

export const addCourses = async(req,res) =>{
    try {
        const course = await Course.create(req.body);
        res.status(201).json(course);
    } catch (err) {
        res.status(500).json({message:err.message})
    }
};

export const getCourse = async(req,res) =>{
    try {
        const courses = await Course.find();
        res.status(200).json(courses);
    } catch (err) {
        res.status(500).json({message :err.message});   
    }
}