import express from "express";
import { registerUser } from "../controllers/authController.js";
import { isLogin } from "../controllers/logController.js";
import { protection } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/signup", registerUser);
router.post("/login", isLogin);

// ✅ Protected route for home
router.get("/home", protection, (req, res) => {
  res.json({ message: `Welcome ${req.user.name}, you are authorized!` });
});

export default router;
