import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description :{
        type :String,
        require :true,
    },
    duration :{
        type :String,
        require : true,
    },
    image: {
    type: String,
    default: "src\assets\sangga-rima-roman-selia-bgQgAKagQB4-unsplash.jpg",
  },
});
 const Course = mongoose.model("Course", courseSchema);
export default Course;
