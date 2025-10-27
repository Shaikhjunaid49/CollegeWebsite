import User from "../models/User.js";
import status from "http-status";
import jwt from "jsonwebtoken";

export const isLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(status.NOT_FOUND).json({ message: "User not found" });
    }

    const isMatch = await user.matchPassword(password); // ✅ use model method
    if (!isMatch) {
      return res.status(status.UNAUTHORIZED).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.status(status.OK).json({
      message: "Login successful",
      token,
      user: { id: user._id, name: user.name, email: user.email }
    });

  } catch (error) {
    res.status(status.INTERNAL_SERVER_ERROR).json({ message: error.message });
  }
};
