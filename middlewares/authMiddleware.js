import User from "../models/User.js";
import status from "http-status";

import jwt from "jsonwebtoken";

export const protection = async(req , res ,next)=>{
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.id).select("-password");
      return next();
    } catch (err) {
      return res.status(status.UNAUTHORIZED).json({ message: "Not authorized" });
    }
  }

  if (!token) {
    return res.status(status.UNAUTHORIZED).json({ message: "Not authorized,LOgin first" });
  }


}