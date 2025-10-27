import User from "../models/User.js";
import status from "http-status";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(status.CONFLICT).json({ message: "User already exists" });
    }

    // Pass plain password — model will hash it
    const user = await User.create({ name, email, password });

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.status(status.CREATED).json({
      message: "User registered successfully",
      token,
      user: { id: user._id, name: user.name, email: user.email }
    });

  } catch (err) {
    res.status(status.INTERNAL_SERVER_ERROR).json({ message: err.message });
  }
};
