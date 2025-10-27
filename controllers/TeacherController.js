import Teacher from "../models/Teacher.js";

export const getTeacher =async(req , res )=>{
    try {
        const teachers = await Teacher.find();
        res.status(200).json(teachers)
    } catch (err) {
        res.status(500).json({message:err.message});
    }
}

export const addTeacher = async (req ,res )=>{
try {
    const {name, email, subject, phone} =req.body;

    const newTeacher = new Teacher ({
        name,
        email,
        subject,
        phone,

    });
    await newTeacher.save();
    res.status(201).json({ message: "Teacher added successfully", teacher: newTeacher });
} catch (err) {
    res.status(201).json({message:err.message});
}
};
