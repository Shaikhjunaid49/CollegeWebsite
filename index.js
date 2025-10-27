import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import router from "./routes/authRouth.js";
import courseRouter from "./routes/courseRoute.js";
import teacherRoute from "./routes/techerRout.js"

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/users", router);
app.use("/courses" ,courseRouter);
app.use("/teachers",teacherRoute);


app.get("/",(req,res)=>{
    res.json({message:"root"});

})

// Connect DB & start server
connectDB();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// as of now i add 4 courses data and one courses.jsx file in frontend and do further next on project 